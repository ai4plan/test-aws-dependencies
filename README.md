# aws-amplify vs @aws-amplyfy/*

## the react ui packages do have a peer dependency to the big `aws-amplify`

see https://github.com/aws-amplify/amplify-ui/blob/main/package.json

```
"@aws-amplify/ui-react"                     "peerDependencies": { "aws-amplify": "^6.14.3" }
                                            "peerDependenciesMeta": { "aws-amplify": { "optional": true } },
"@aws-amplify/ui-react-ai",                 "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-core"                "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-core-notifications"  "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-geo"                 "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-liveness"            "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-native"              "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-notifications"       "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-storage"             "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui"                           "peerDependencies": { "aws-amplify": "^6.14.3" } 
```


## react ui examples use Amplify.configure()

It seems that all examples in https://github.com/aws-amplify/amplify-ui/blob/main/examples/README.md
use `aws-amplify` ONLY to call `Amplify.configure(awsExports)`

```
import { Amplify } from 'aws-amplify';
//...
Amplify.configure(awsExports);
```


# how to workaround this peer dependency ?


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

