import path from 'path';

import solve from './a';

test('example', () => {
  const answer = solve(path.resolve(__dirname, './example.txt'));
  expect(answer).toEqual(5);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(8060);
});
