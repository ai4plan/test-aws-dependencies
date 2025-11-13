# test-aws-dependencies

Tests the consistency of nested dependencies of aws-amplify and aws-sdk

usage
- run `npm run amplify` to generate `amplify/dependencies.json`
- run `npm run amplify-ui-react` to generate `amplify-ui-react/dependencies.json`
- ...


annoying dependency


# `@aws-amplify/ui-react` depends on `aws-amplify` as a peer dependecy

```json
  "peerDependencies": {
    "@aws-amplify/core": "*",
    "aws-amplify": "^6.14.3",
    "react": "^16.14.0 || ^17.0 || ^18.0 || ^19",
    "react-dom": "^16.14 || ^17 || ^18 || ^19"
  },
  "peerDependenciesMeta": {
    "aws-amplify": {
      "optional": true
    }
  },
```


```
$ npm info @aws-amplify/ui peerDependencies
{
  xstate: '^4.33.6',
  'aws-amplify': '^6.14.3',
  '@aws-amplify/core': '*'
}

$ npm info @aws-amplify/ui-react peerDependencies
{
  react: '^16.14.0 || ^17.0 || ^18.0 || ^19',
  'react-dom': '^16.14 || ^17 || ^18 || ^19',
  'aws-amplify': '^6.14.3',
  '@aws-amplify/core': '*'
}

$ npm info @aws-amplify/ui-react-core peerDependencies
{ react: '^16.14 || ^17 || ^18 || ^19', 'aws-amplify': '^6.14.3' }
```



TO AVOID INSTALLING aws-amplify ?


DOES THIS WORK ??
```json
"overrides": {
  "aws-amplify": false
}
```



# --legacy-peer-deps

https://docs.npmjs.com/cli/v11/using-npm/config#legacy-peer-deps

Causes npm to completely ignore peerDependencies when building a package tree, as in npm versions 3 through 6.

If a package cannot be installed because of overly strict peerDependencies that collide, it provides a way to move forward resolving the situation.

This differs from --omit=peer, in that --omit=peer will avoid unpacking peerDependencies on disk, but will still design a tree such that peerDependencies could be unpacked in a correct place.


# --omit

https://docs.npmjs.com/cli/v11/commands/npm-install#omit

- Default: 'dev' if the NODE_ENV environment variable is set to 'production'; otherwise, empty.
- Type: "dev", "optional", or "peer" (can be set multiple times)

**Note that these dependencies are still resolved and added to the package-lock.json or npm-shrinkwrap.json file. They are just not physically installed on disk.**


# --include

https://docs.npmjs.com/cli/v11/commands/npm-install#include


# --strict-peer-deps

https://docs.npmjs.com/cli/v11/commands/npm-install#strict-peer-deps

Default: false

If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure, even if npm could reasonably guess the appropriate resolution based on non-peer dependency relationships.




# --prefer-dedup
https://docs.npmjs.com/cli/v11/commands/npm-install#prefer-dedupe






# TODO try 

- npm install
- npm dedupe
- npm cache verify

