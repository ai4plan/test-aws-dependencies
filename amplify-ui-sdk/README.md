we copy the `overrides`

```
    "@aws-sdk/types": "3.973.1",
    "@aws-sdk/nested-clients": "3.995.0",
    "@aws-sdk/client-cognito-identity" : "3.995.0",
    "@aws-sdk/util-endpoints": "3.995.0",
    "@smithy/util-utf8": "4.2.0",
    "@smithy/util-base64": "4.3.0",
    "@smithy/is-array-buffer": "4.2.0",
    "@smithy/util-hex-encoding": "4.2.1",
    "@smithy/types": "4.12.0",
    "@smithy/md5-js": "4.2.8",
    "@smithy/util-buffer-from": "4.2.0",
    "fast-xml-parser": "5.3.7"
```

into `dependencies` so that `npm outdated` tells us about new versions

alternativeley we can run `npm info`

```
npm info @smithy/util-utf8          version     4.2.0
npm info @smithy/util-base64        version     4.3.0
npm info @smithy/is-array-buffer    version     4.2.0
npm info @smithy/util-hex-encoding  version     4.2.1
npm info @smithy/types              version     4.12.0
npm info @smithy/md5-js             version     4.2.8
npm info @smithy/util-buffer-from   version     4.2.0
npm info fast-xml-parser            version     5.3.7
```