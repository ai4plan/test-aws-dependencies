# lean

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/api-rest": "4.5.0",
    "@aws-amplify/core": "6.14.0",

    "aws-amplify": "file:./dummy-aws-amplify",

    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```

# result

## only one _multiple_versions:

```json
  "@smithy/types": {
    "_multiple_versions": true,
    "2.12.0": [
      "@aws-amplify/core@6.14.0 > @aws-sdk/types@3.398.0"
    ],
    "3.7.2": [
      "@aws-amplify/auth@6.17.0"
    ]
  },
```

## dependencies to `@aws-sdk/*`

```json
{
    "@aws-amplify/ui-react": "6.13.1",
    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/api-rest": "4.5.0",
    "@aws-amplify/core": "6.14.0",
}
```

**DO NOT DEPEND on any `@aws-sdk/*`**

(except  `"@aws-amplify/core@6.14.0 > @aws-sdk/types@3.398.0"`)

In other tests, it seems that the only `@aws-amplify` packages that depends on `@aws-sdk/*` is `@aws-amplify/analytics`.


