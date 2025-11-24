# top

```json
  "dependencies": {
    "aws-amplify": "6.15.8"
  },
```

# results

[dependencies-all.json](./dependencies-all.json)

- DOES contain `"aws-amplify"`
- DOES contain `@aws-amplify/auth`

## dependencies-1.json

`aws-amplify` is a facade see C:\dev\ext\amplify-js\packages\aws-amplify

```json
{
  "@aws-amplify/analytics": "7.0.89",
  "@aws-amplify/api": "6.3.20",
  "@aws-amplify/auth": "6.17.0",
  "@aws-amplify/core": "6.14.0",
  "@aws-amplify/datastore": "5.1.1",
  "@aws-amplify/notifications": "2.0.89",
  "@aws-amplify/storage": "6.10.1",
}
```

## dependencies-all.json

```jsonc
{
  // WE CAN DISCARD "@aws-amplify/analytics"
  "@aws-amplify/analytics": {
    "7.0.89": ["aws-amplify@6.15.8"]
  },
  // CAN WE DISCARD "@aws-amplify/api-graphql" ?
  "@aws-amplify/api": {
    "6.3.20": [
      "aws-amplify@6.15.8",
      "aws-amplify@6.15.8 > @aws-amplify/datastore@5.1.1"
    ]
  },
  // WE CAN DISCARD "@aws-amplify/api-graphql"
  "@aws-amplify/api-graphql": {
    "4.8.1": [
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20",
      "aws-amplify@6.15.8 > @aws-amplify/datastore@5.1.1"
    ]
  },
  "@aws-amplify/api-rest": {
    "4.5.0": [
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20",
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20 > @aws-amplify/api-graphql@4.8.1"
    ]
  },
  "@aws-amplify/auth": {
    "6.17.0": ["aws-amplify@6.15.8"]
  },
  "@aws-amplify/core": {
    "6.14.0": [
      "aws-amplify@6.15.8",
      "aws-amplify@6.15.8 > @aws-amplify/analytics@7.0.89",
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20",
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20 > @aws-amplify/api-graphql@4.8.1",
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20 > @aws-amplify/api-rest@4.5.0",
      "aws-amplify@6.15.8 > @aws-amplify/auth@6.17.0",
      "aws-amplify@6.15.8 > @aws-amplify/datastore@5.1.1",
      "aws-amplify@6.15.8 > @aws-amplify/notifications@2.0.89",
      "aws-amplify@6.15.8 > @aws-amplify/storage@6.10.1"
    ]
  },
  "@aws-amplify/data-schema": {
    "1.22.0": [
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20",
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20 > @aws-amplify/api-graphql@4.8.1"
    ]
  },
  "@aws-amplify/data-schema-types": {
    "1.2.0": [
      "aws-amplify@6.15.8 > @aws-amplify/api@6.3.20 > @aws-amplify/data-schema@1.22.0"
    ]
  },
  "@aws-amplify/datastore": {
    "5.1.1": ["aws-amplify@6.15.8"]
  },
  "@aws-amplify/notifications": {
    "2.0.89": ["aws-amplify@6.15.8"]
  },
  "@aws-amplify/react-native": {
    "undefined": ["aws-amplify@6.15.8 > @aws-amplify/auth@6.17.0"]
  },
  "@aws-amplify/storage": {
    "6.10.1": ["aws-amplify@6.15.8"]
  }
}
```
