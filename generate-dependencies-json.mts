import * as fs from "node:fs";

//--------------------------------------------------------------------------------------------------
function getOrCreateInMap<K, V>(map: Map<K, V>, k: K, ctr: () => V): V {
  const existing = map.get(k);
  if (existing) {
    return existing;
  }
  const created = ctr();
  map.set(k, created);
  return created;
}

type MultiOutputEntry = Record<string, string[] | boolean>;
type OutputEntry = string | MultiOutputEntry;

//--------------------------------------------------------------------------------------------------
function generate_dependencies_json(
  inputAbsPath: string,
  outputAbsPath: string,
  singleVersionMode: "with_parents" | "without_parents"
) {
  const json = fs.readFileSync(inputAbsPath, "utf8");
  const root = JSON.parse(json);

  const dep_entries = new Map<string, Map<string, string[]>>();

  // name: { version: parent_paths[] }
  function walk(parent: any, parent_path: string) {
    if (!parent || !parent.dependencies) {
      return;
    }
    for (const dep_name of Object.keys(parent.dependencies)) {
      const dep_obj = parent.dependencies[dep_name];
      const dep_version = dep_obj.version;
      const dep_name_version = `${dep_name}@${dep_version}`;
      const dep_path = parent_path
        ? `${parent_path} > ${dep_name_version}`
        : dep_name_version;

      const dep_entry = getOrCreateInMap(
        dep_entries,
        dep_name,
        () => new Map<string, string[]>()
      );
      const dep_versions = getOrCreateInMap(
        dep_entry,
        dep_version,
        () => [] as string[]
      );
      dep_versions.push(parent_path);

      walk(dep_obj, dep_path);
    }
  }
  walk(root, "");

  const dep_names = Array.from(dep_entries.keys()).sort();

  const outputs = {} as Record<string, OutputEntry>;

  for (const dep_name of dep_names) {
    const dep_entry = dep_entries.get(dep_name)!;
    const dep_versions = Array.from(dep_entry.keys()).sort();

    // when there is a single version, we can
    // - either simply put the version string
    // - or write the parent_paths for this single version so that we understand what pulled it in
    if (dep_versions.length === 1 && singleVersionMode === "without_parents") {
      const dep_version = dep_versions[0];
      outputs[dep_name] = dep_version;
    } else {
      const multi = {} as MultiOutputEntry;

      if (dep_versions.length > 1) {
        multi["_multiple_versions"] = true; // makes it easier to spot multiple_versions in the output json
      }
      for (const dep_version of dep_versions) {
        const parent_paths = dep_entry.get(dep_version)!.sort(); // lexical sort is good enough
        multi[dep_version] = parent_paths;
      }
      outputs[dep_name] = multi;
    }
  }

  console.log(`Writing ${outputAbsPath}`);
  fs.writeFileSync(outputAbsPath, JSON.stringify(outputs, null, 2));
}

//--------------------------------------------------------------------------------------------------
const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node generate-dependencies-json.mjs <folder>");
  process.exit(1);
}

const folderAbsDir = `${import.meta.dirname}/${folder}`;

generate_dependencies_json(
  `${folderAbsDir}/npm-ls-all.json`,
  `${folderAbsDir}/dependencies-all.json`,
  "without_parents"
);

generate_dependencies_json(
  `${folderAbsDir}/npm-ls-all.json`,
  `${folderAbsDir}/dependencies-all-parents.json`,
  "with_parents"
);

generate_dependencies_json(
  `${folderAbsDir}/npm-ls-1.json`,
  `${folderAbsDir}/dependencies-1.json`,
  "without_parents"
);
