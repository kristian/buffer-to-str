# NodeJS `buffer-to-str`

[![Test](https://github.com/kristian/buffer-to-str/actions/workflows/test.yml/badge.svg)](https://github.com/kristian/buffer-to-str/actions/workflows/test.yml) [![Lint](https://github.com/kristian/buffer-to-str/actions/workflows/lint.yml/badge.svg)](https://github.com/kristian/buffer-to-str/actions/workflows/lint.yml) [![Issues](https://img.shields.io/github/issues/kristian/buffer-to-str)](https://github.com/kristian/buffer-to-str/issues) [![NPM Version](https://img.shields.io/npm/v/buffer-to-str)](https://www.npmjs.com/package/buffer-to-str)

An unopinonated buffer to string encoding utility.

## Installation

```bash
# NPM
npm install buffer-to-str
# Yarn
yarn add buffer-to-str
```

## Usage

```js
import { toString as bufferToString } from 'buffer-to-str';

const buffer = Buffer.from('abcd', 'hex');
bufferToString(buffer, 'hex') === 'abcd';
bufferToString(buffer, 'hex-upper') === 'ABCD';
bufferToString(buffer, '0x-hex_upper') === '0xABCD';
```

The format string is generously accepting prefixes / suffixes, meaning many combinations are allowed:

`uc`, `upper-case`, `up`, `upper`, `_upper`, ...

Are all aliases to making the string upper case. Same goes for lower case. `toString` accepts the same encodings as the regular `Buffer.toString()` method from Node.js.

Alternatively `toFormat` allows for an additional `id` / `identity` format, so returning the buffer itself:

```js
import { toFormat as bufferToFormat } from 'buffer-to-str';

const buffer = Buffer.from('abcd', 'hex');
bufferToFormat(buffer, 'hex') === 'abcd';
bufferToFormat(buffer, 'id').equals(Buffer.from('abcd', 'hex'));
```

## Author

`buffer-to-str` for Node.js by [Kristian Kraljić](https://kra.lc/).

## Bugs

Please file any questions / issues [on Github](https://github.com/kristian/buffer-to-str/issues).

## License

This library is licensed under the [Apache 2.0](LICENSE) license.
