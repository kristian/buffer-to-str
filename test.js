import test from 'ava';

import { default as defaultExport, toString, toFormat } from './index.js';
const buffer = Buffer.from('abcd1234', 'hex');

test(`Test default export`, t => {
  t.is(defaultExport, toString, 'The default export should be the toString function');
});

test(`Test toString`, t => {
  t.is(toString(buffer, 'hex'), 'abcd1234');
  t.is(toString(buffer, 'hex_uc'), 'ABCD1234');
  t.is(toString(buffer, 'hex_upper'), 'ABCD1234');
  t.is(toString(buffer, 'hex_upperCase'), 'ABCD1234');
  t.is(toString(buffer, '0x'), '0xabcd1234');
  t.is(toString(buffer, '0x-upper-case'), '0xABCD1234');
  t.is(toString(buffer, '0X-base64-lower_case'), '0Xq80sna==');
  t.throws(() => toString(buffer, '0X-case'), { instanceOf: TypeError, code: 'ERR_UNKNOWN_ENCODING' });
});

test('Test toFormat', t => {
  t.is(toFormat(buffer), buffer);
  t.is(toFormat(buffer, 'id'), buffer);
  t.is(toFormat(buffer, 'identity'), buffer);
  t.is(toFormat(buffer, 'hex'), 'abcd1234');
});
