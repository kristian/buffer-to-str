import { Buffer } from 'node:buffer';

/**
 * Buffer to string, similar to `Buffer.toString()`, adding the following formatting options:
 *
 * - Prefix with '0x' to prefix the resulting string with 0x, e.g. 0xhex (or just 0x) to generate a 0x0102abcd hex string
 * - Suffix with '_upper', '_ucase', '_uc', '_up', '_lower', '_lcase', '_lc', 'lo', to change the case of result string
 *
 * E.g. to encode a buffer into a 0x-prefixed upper case hex string, use format '0x_upper', '0xHex_UpperCase' or any combination.
 *
 * @param {Buffer} buffer the buffer to encode into a string
 * @param {string} format any encoding allowed in `Buffer.toString()`, optionally prefixed by '0x' and suffixed by upper / lower case in any variation
 * @returns {string} the buffer encoded to a string
 */
export function toString(buffer, format) {
  const [, prefix, encoding, changeCase] = format.match(/^(?:(0x)[_-]?)?(.*?)(?:[_-]?(u(?:p(?:per)?)?|l(?:o(?:wer)?)?)(?:[_-]?(?:c(?:ase)?|(?<![ul]))))?$/i);
  let string = buffer.toString(encoding.toLowerCase() || 'hex');

  switch (changeCase?.[0]?.toLowerCase()) {
    case 'l':
      string = string.toLowerCase();
      break;
    case 'u':
      string = string.toUpperCase();
      break;
  }

  return `${prefix ?? ''}${string}`;
}

/**
 * Similar to the `toString()` function, but with allowing to omit the format string / setting a 'id' or 'identity' format,
 * to not encode the buffer.
 *
 * @param {Buffer} buffer the buffer to encode into a string
 * @param {string} [format] similar to `toString()`, but with null, 'id' or 'identity' to not encode the buffer
 * @returns {(Buffer|string)} either the buffer encoded to a string or the buffer itself
 * @see toString
 */
export function toFormat(buffer, format) {
  if (!format || /^id/i.test(format)) {
    return buffer;
  }

  return toString(buffer, format);
}

export default toString;
