import path from 'path';

import solve from './a';

test('example', () => {
  const answer = solve(path.resolve(__dirname, './example.txt'), 18);
  expect(answer).toEqual(26);

  const answer2 = solve(path.resolve(__dirname, './example.txt'), 80);
  expect(answer2).toEqual(5934);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'), 80);
  expect(answer).toEqual(371379);
});
