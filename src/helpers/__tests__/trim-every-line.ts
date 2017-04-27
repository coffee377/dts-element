jest.unmock('../trim-every-line');

import {trim_every_line} from '../trim-every-line';

it('should remove leading spaces and trailing spaces', () => {
  const line1 = 'line 1';
  const line2 = 'line 2';
  const line3 = 'line 3';
  expect(trim_every_line(` ${line1} \n ${line2} \n ${line3} `)).toBe(`${line1}\n${line2}\n${line3}`);
});
