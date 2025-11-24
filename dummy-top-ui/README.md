# dummy-top-ui

[package.json](package.json)

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


# dependencies-all.json @aws-amplify/*

```json
{
  "@aws-amplify/api-rest": "4.5.0",
  "@aws-amplify/auth": "6.17.0",
  "@aws-amplify/core": "6.14.0",
  "@aws-amplify/notifications": "2.0.89",
  "@aws-amplify/storage": "6.10.1",
  "@aws-amplify/ui": "6.12.1",
  "@aws-amplify/ui-react": "6.13.1",
  "@aws-amplify/ui-react-core": "3.4.6",
  "@aws-crypto/sha256-js": "5.2.0",
  "@aws-crypto/util": "5.2.0",
  "@aws-sdk/types": "3.398.0",
}
```
