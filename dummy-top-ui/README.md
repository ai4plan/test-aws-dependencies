# dummy-top-ui

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/core": "6.14.0",
    "@aws-amplify/datastore": "5.1.1",
    "@aws-amplify/notifications": "2.0.89",
    "@aws-amplify/storage": "6.10.1",

    "aws-amplify": "file:./dummy-aws-amplify",

    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```

## `dummy-aws-amplify/package.json`

```json
{
	"name": "aws-amplify",
	"version": "6.15.8",
	"dependencies": {
	}
}
```

# results

[dependencies-all.json](./dependencies-all.json) does contain `"aws-amplify"` but it's the dummy one
so it does NOT pull any dependencies.

`node_modules/aws-amplify` is there but only contains the dummy `package.json`



