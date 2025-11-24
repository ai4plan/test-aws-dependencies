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

