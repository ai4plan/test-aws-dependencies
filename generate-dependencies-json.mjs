import * as fs from "node:fs";

const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node flatten-deps.mjs <folder>");
  process.exit(1);
}

const rootDir = import.meta.dirname;
const inputAbsPath = `${rootDir}/${folder}/npm-ls-all.json`;
const outputAbsPath = `${rootDir}/${folder}/dependencies.json`;

function getOrCreateInMap(map, k, ctr) {
  const existing = map.get(k);
  if (existing) {
    return existing;
  }
  const created = ctr();
  map.set(k, created);
  return created;
}

const json = fs.readFileSync(inputAbsPath, "utf8");
const root = JSON.parse(json);

const dep_entries = new Map();

// name: { version: parent_paths[] }
function walk(parent, parent_path) {
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

    const dep_entry = getOrCreateInMap(dep_entries, dep_name, () => new Map());
    const dep_versions = getOrCreateInMap(dep_entry, dep_version, () => []);
    dep_versions.push(parent_path);

    walk(dep_obj, dep_path);
  }
}
walk(root, "");

const dep_names = Array.from(dep_entries.keys()).sort();

const output = {};

for (const dep_name of dep_names) {
  const dep_entry = dep_entries.get(dep_name);
  const dep_versions = Array.from(dep_entry.keys()).sort();

  if (dep_versions.length === 1) {
    const dep_version = dep_versions[0];
    output[dep_name] = dep_version;
  } else {
    const multi = {};
    for (const dep_version of dep_versions) {
      const parent_paths = dep_entry.get(dep_version).sort(); // lexical sort is good enough
      multi[dep_version] = parent_paths;
    }
    output[dep_name] = multi;
  }
}

console.log(`Writing ${outputAbsPath}`);
fs.writeFileSync(outputAbsPath, JSON.stringify(output, null, 2));
