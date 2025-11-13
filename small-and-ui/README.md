
we removed
- "@aws-amplify/analytics": "7.0.89",
- "@aws-amplify/api": "6.3.20",













@aws-amplify/ui-react@6.13.1
  @aws-amplify/ui-react-core@3.4.6
    UNMET DEPENDENCY aws-amplify@^6.14.3 <--- it's a peerDependencies BUT NOT OPTIONAL !

see https://github.com/aws-amplify/amplify-ui/blob/%40aws-amplify/ui-react-core%403.4.6/packages/react-core/package.json
```
  "peerDependencies": {
    "aws-amplify": "^6.14.3",
    "react": "^16.14 || ^17 || ^18 || ^19"
  },
```

@aws-amplify/ui@6.12.1
  UNMET DEPENDENCY aws-amplify@^6.14.3 <--- it's a peerDependencies  BUT NOT OPTIONAL !
