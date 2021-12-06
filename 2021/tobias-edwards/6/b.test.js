import path from 'path';

import solve from './a';

test('example', () => {
  const answer = solve(path.resolve(__dirname, './example.txt'), 256);
  expect(answer).toEqual(26984457539);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'), 256);
  expect(answer).toEqual(21577);
});
