# lean

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/core": "6.14.0",
    "@aws-amplify/notifications": "2.0.89",

    "aws-amplify": "file:./dummy-aws-amplify",

    "@aws-sdk/client-dynamodb": "3.931.0",
    "@aws-sdk/client-s3": "3.931.0",
    "@aws-sdk/types": "3.930.0",
    "@aws-sdk/lib-dynamodb": "3.931.0",
    "@aws-sdk/s3-request-presigner": "3.931.0",

    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```


for testing/admin operations (not added for now)

```json
    "@aws-sdk/client-sts": "3.931.0",
    "@aws-sdk/client-cognito-identity-provider": "3.931.0",
    "@aws-sdk/credential-providers": "3.931.0",
```

what about `"@aws-sdk/smithy-client": "3.374.0"` we have in the ai4plan client on 2025-11-14 ?
It's probably a way to force a version to avoid version conflicts ?




# overrides 

https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides


To make sure the package foo is ALWAYS installed as version 1.0.0 no matter what version your dependencies rely on:

```json
{
  "overrides": {
    "foo": "1.0.0"
  }
}
```

You may not set an override for a package that you directly depend on unless both the dependency and the override itself share the exact same spec. To make this limitation easier to deal with, overrides may also be defined as a reference to a spec for a direct dependency by prefixing the name of the package you wish the version to match with a $.

```json
{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "overrides": {
    "foo": "$foo",
  }
}
```


# dependency issues

solved by overrides in package.json

1. `@aws-crypto/sha256-browser@5.2.0 pulls @smithy/util-utf8@2.3.0"`

`npm info @aws-crypto/sha256-browser dependencies`

see
- https://github.com/aws/aws-sdk-js-crypto-helpers/issues/847
- https://github.com/aws/aws-sdk-js-v3/issues/6613
- https://github.com/aws/aws-sdk-js-crypto-helpers/blob/v5.2.0/packages/sha256-browser/package.json
  - "@smithy/util-utf8": "^2.0.0",


SOLUTION 1
- use our own fork where we upgraded dependencies
  - see https://github.com/galdebert/aws-sdk-js-crypto-helpers/tree/upgrade-dependencies

SOLUTION 2
- use npm "overrides" : { ... }


2. `@aws-amplify/core@6.14.0 pulls @smithy/util-hex-encoding@2.0.0`
  
see `npm info @aws-amplify/core dependencies`



3. `@aws-amplify/auth@6.17.0 pulls @smithy/types@3.7.2`

see `npm info @aws-amplify/auth@6.17.0 dependencies`


