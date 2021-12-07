import path from 'path';

import solve from './b';

test('example', () => {
  const answer = solve(path.resolve(__dirname, './example.txt'));
  expect(answer).toEqual(168);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(99788435);
});
