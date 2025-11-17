# aws-amplify vs @aws-amplify/* vs @aws-amplify/ui*

https://github.com/aws-amplify/amplify-js/issues/10423

In general, **we recommend using aws-amplify as the only dependency in your project** because you’ll get
access to the scoped packages (like @aws-amplify/auth) as well to ensure there aren’t dependency
mismatches in your project

https://www.npmjs.com/package/@aws-amplify/auth says:
This package contains the AWS Amplify Auth category and is intended for internal use only. To integrate Amplify into your app, please use aws-amplify.


All examples use `aws-amplify/auth` and NOT `@aws-amplify/auth`

Another weird issue: **aws-amplify/auth and @aws-amplify/atuh don't have the same types !**





## aws-amplify/amplify-js -> packages @aws-amplify/ui*

github repo https://github.com/aws-amplify/amplify-js

publishes

the top
- https://www.npmjs.com/package/aws-amplify
 
the internal
- https://www.npmjs.com/package/@aws-amplify/analytics"
- https://www.npmjs.com/package/@aws-amplify/api"
- https://www.npmjs.com/package/@aws-amplify/auth"
- https://www.npmjs.com/package/@aws-amplify/core"
- https://www.npmjs.com/package/@aws-amplify/datastore"
- https://www.npmjs.com/package/@aws-amplify/notifications"
- https://www.npmjs.com/package/@aws-amplify/storage"
- ...
  

## github aws-amplify/amplify-ui -> packages @aws-amplify/ui*

doc https://ui.docs.amplify.aws/react

github repo https://github.com/aws-amplify/amplify-ui

publishes
- https://www.npmjs.com/package/@aws-amplify/ui
- https://www.npmjs.com/package/@aws-amplify/ui-react
- https://www.npmjs.com/package/@aws-amplify/ui-react-core"
- https://www.npmjs.com/package/@aws-amplify/ui-react-notifications"
- https://www.npmjs.com/package/@aws-amplify/ui-react-storage"
- ...

## the react ui packages do have a peer dependency to the top `aws-amplify`

see https://github.com/aws-amplify/amplify-ui/blob/main/package.json

```
"@aws-amplify/ui-react"                     "peerDependencies": { "aws-amplify": "^6.14.3" }
                                            "peerDependenciesMeta": { "aws-amplify": { "optional": true } },
"@aws-amplify/ui-react-ai",                 "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-core"                "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-core-notifications"  "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-geo"                 "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-liveness"            "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-native"              "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-notifications"       "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui-react-storage"             "peerDependencies": { "aws-amplify": "^6.14.3" } 
"@aws-amplify/ui"                           "peerDependencies": { "aws-amplify": "^6.14.3" } 
```


## react ui examples use Amplify.configure()

It seems that all examples in https://github.com/aws-amplify/amplify-ui/blob/main/examples/README.md
use `aws-amplify` ONLY to call `Amplify.configure(awsExports)`

```ts
import { Amplify } from 'aws-amplify';
//...
Amplify.configure(awsExports);
```


# So is it mandatory to depend on `aws-amplify` and pulling its dependencies only to call Amplify.configure(awsExports) ?

Well no (TBC).

Let's look into the 2 only files in `aws-amplify` that are not just reexporting stuff from @aws-amplify/*

https://github.com/aws-amplify/amplify-js/blob/aws-amplify%406.13.1/packages/aws-amplify/src/index.ts

```ts
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
This file maps top-level exports from `aws-amplify`.
*/

export { DefaultAmplify as Amplify } from './initSingleton';
export { ResourcesConfig } from '@aws-amplify/core';
```

and

https://github.com/aws-amplify/amplify-js/blob/aws-amplify%406.13.1/packages/aws-amplify/src/initSingleton.ts

```ts
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import {
	Amplify,
	CookieStorage,
	LibraryOptions,
	ResourcesConfig,
	defaultStorage,
} from '@aws-amplify/core';
import {
	AmplifyOutputsUnknown,
	LegacyConfig,
	parseAmplifyConfig,
} from '@aws-amplify/core/internals/utils';

import {
	CognitoAWSCredentialsAndIdentityIdProvider,
	DefaultIdentityIdStore,
	cognitoCredentialsProvider,
	cognitoUserPoolsTokenProvider,
} from './auth/cognito';

export const DefaultAmplify = {
	/**
	 * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
	 *
	 * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
	 * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
	 * @param libraryOptions The {@link LibraryOptions} additional options for the library.
	 *
	 * @example
	 * import config from './amplifyconfiguration.json';
	 *
	 * Amplify.configure(config);
	 */
	configure(
		resourceConfig: ResourcesConfig | LegacyConfig | AmplifyOutputsUnknown,
		libraryOptions?: LibraryOptions,
	): void {
		const resolvedResourceConfig = parseAmplifyConfig(resourceConfig);
		const cookieBasedKeyValueStorage = new CookieStorage({ sameSite: 'lax' });
		const resolvedKeyValueStorage = libraryOptions?.ssr
			? cookieBasedKeyValueStorage
			: defaultStorage;
		const resolvedCredentialsProvider = libraryOptions?.ssr
			? new CognitoAWSCredentialsAndIdentityIdProvider(
					new DefaultIdentityIdStore(cookieBasedKeyValueStorage),
				)
			: cognitoCredentialsProvider;

		// If no Auth config is provided, no special handling will be required, configure as is.
		// Otherwise, we can assume an Auth config is provided from here on.
		if (!resolvedResourceConfig.Auth) {
			Amplify.configure(resolvedResourceConfig, libraryOptions);

			return;
		}

		// If Auth options are provided, always just configure as is.
		// Otherwise, we can assume no Auth libraryOptions were provided from here on.
		if (libraryOptions?.Auth) {
			Amplify.configure(resolvedResourceConfig, libraryOptions);

			return;
		}

		// If no Auth libraryOptions were previously configured, then always add default providers.
		if (!Amplify.libraryOptions.Auth) {
			cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
			cognitoUserPoolsTokenProvider.setKeyValueStorage(
				// TODO: allow configure with a public interface
				resolvedKeyValueStorage,
			);

			Amplify.configure(resolvedResourceConfig, {
				...libraryOptions,
				Auth: {
					tokenProvider: cognitoUserPoolsTokenProvider,
					credentialsProvider: resolvedCredentialsProvider,
				},
			});

			return;
		}

		// At this point, Auth libraryOptions would have been previously configured and no overriding
		// Auth options were given, so we should preserve the currently configured Auth libraryOptions.
		if (libraryOptions) {
			const authLibraryOptions = Amplify.libraryOptions.Auth;
			// If ssr is provided through libraryOptions, we should respect the intentional reconfiguration.
			if (libraryOptions.ssr !== undefined) {
				cognitoUserPoolsTokenProvider.setKeyValueStorage(
					// TODO: allow configure with a public interface
					resolvedKeyValueStorage,
				);

				authLibraryOptions.credentialsProvider = resolvedCredentialsProvider;
			}

			Amplify.configure(resolvedResourceConfig, {
				Auth: authLibraryOptions,
				...libraryOptions,
			});

			return;
		}

		// Finally, if there were no libraryOptions given at all, we should simply not touch the currently
		// configured libraryOptions.
		Amplify.configure(resolvedResourceConfig);
	},
	/**
	 * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
	 * `Amplify.configure`.
	 *
	 * @returns An {@link ResourcesConfig} object.
	 */
	getConfig(): ResourcesConfig {
		return Amplify.getConfig();
	},
};
```

**So we can simply copy paste this code in ours.**

It only pulls `@aws-amplify/core` and `@aws-amplify/auth/cognito` which is nice.

