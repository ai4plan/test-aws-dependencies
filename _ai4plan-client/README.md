# dummy-top-ui

[package.json](package.json)


`@aws-amplify/ui-react` code does import from `aws-amplify/storage` and `aws-amplify/storage`
instead of `@aws-amplify/storage` and `aws-amplify/storage`

see https://github.com/aws-amplify/amplify-ui/blob/%40aws-amplify/ui-react%406.13.1/packages/react/src/hooks/useAuth.ts

```ts
// @aws-amplify/ui-react

// packages/react/src/components/AccountSettings/DeleteUser/types.ts
import type { AuthUser } from 'aws-amplify/auth';

// packages/react/src/components/Authenticator/Authenticator.tsx
import * as Storage from 'aws-amplify/storage';

// packages/react/src/components/Authenticator/withAuthenticator.tsx
import type { AuthUser } from 'aws-amplify/auth';

// packages/react/src/hooks/useAuth.ts
import type { AuthUser } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

// packages/react/src/hooks/useStorageURL.ts
import * as Storage from 'aws-amplify/storage';
```

`@aws-amplify/ui` imports from `'aws-amplify/auth'` too




# first try 

```json
{
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/analytics": "file:./dummy-aws-amplify/analytics",
    "@aws-amplify/api": "6.3.20",
    "@aws-amplify/api-graphql": "file:./dummy-aws-amplify/api-graphql",
    "@aws-amplify/api-rest": "4.5.0",
    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/core": "6.14.0",
    "@aws-amplify/data-schema": "1.22.0",
    "@aws-amplify/data-schema-types": "1.2.0",
    "@aws-amplify/datastore": "5.1.1",
    "@aws-amplify/notifications": "2.0.89",
    "@aws-amplify/storage": "6.10.1",

    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
}
```


# second try

```json
{
  "dependencies": {
    "@aws-amplify/ui-react": "6.13.1",

    "@aws-amplify/analytics": "file:./dummy-aws-amplify/analytics",
    "@aws-amplify/api": "6.3.20",
    "@aws-amplify/api-graphql": "file:./dummy-aws-amplify/api-graphql",
    "@aws-amplify/api-rest": "4.5.0",
    "@aws-amplify/auth": "6.17.0",
    "@aws-amplify/core": "6.14.0",
    "@aws-amplify/datastore": "file:./dummy-aws-amplify/datastore",
    "@aws-amplify/notifications": "2.0.89",
    "@aws-amplify/storage": "6.10.1",

    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
}
```