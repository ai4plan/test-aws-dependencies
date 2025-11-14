# small-and-ui-legacy-peer-deps

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/core": "6.14.0",
    "@aws-amplify/datastore": "5.1.1",
    "@aws-amplify/notifications": "2.0.89",
    "@aws-amplify/storage": "6.10.1",
    
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```

we have `legacy-peer-deps=true`


# results

[dependencies-all.json](./dependencies-all.json) does NOT contain `"aws-amplify"`

**BUT there are lots of missing dependencies ! DO NOT USE `legacy-peer-deps=true`**


`npm i` : no error

`npm ls --all` complains about  UNMET DEPENDENCY aws-amplify@^6.14.3
```
npm error missing: aws-amplify@^6.14.3, required by @aws-amplify/ui-react-core@3.4.6
npm error missing: aws-amplify@^6.14.3, required by @aws-amplify/ui@6.12.1
```
and returns rc != 0

so we need to run manually:
- `npm i`
- `npm run ls`
- `npm run gen`



