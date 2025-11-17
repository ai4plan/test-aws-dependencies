# top-ui-dummy-analytics

In aws-amplify v6 we MUST USE the root "aws-amplify" because it's the only way to call configure.
we only have `Amplify.configure()`, more granular such as  `Auth.configure()` are no longer available...

```json
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",
    "aws-amplify": "6.15.8",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
```

# results

[dependencies-all.json](./dependencies-all.json) DOES contain `"aws-amplify"`
