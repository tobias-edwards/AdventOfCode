import path from 'path';

import solve, { numOfIncreases } from './a';

test('example', () => {
  expect(
    numOfIncreases([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
  ).toEqual(7);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(1387);
});
