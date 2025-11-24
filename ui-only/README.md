# ui-only

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```

we added `react` and `react-dom` to avoid the error
`peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from @xstate/react@3.2.2`


# results

## dependencies-1.json

{
  "@aws-amplify/core": "6.14.0",
  "@aws-amplify/ui": "6.12.1",
  "@aws-amplify/ui-react": "6.13.1",
  "@aws-amplify/ui-react-core": "3.4.6",
  ...
}

## dependencies-all.json

{
  "@aws-amplify/core": "6.14.0",
  "@aws-amplify/ui": "6.12.1",
  "@aws-amplify/ui-react": "6.13.1",
  "@aws-amplify/ui-react-core": "3.4.6",

  "@aws-amplify/analytics": "7.0.89",
  "@aws-amplify/api": "6.3.20",
  "@aws-amplify/api-graphql": "4.8.1",
  "@aws-amplify/api-rest": "4.5.0",
  "@aws-amplify/auth": "6.17.0",
  "@aws-amplify/data-schema": "1.22.0",
  "@aws-amplify/data-schema-types": "1.2.0",
  "@aws-amplify/datastore": "5.1.1",
  "@aws-amplify/notifications": "2.0.89",
  "@aws-amplify/storage": "6.10.1",
  ...
}