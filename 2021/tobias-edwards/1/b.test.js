import path from 'path';

import solve, { numOfSlidingWindowIncreases } from './b';

it('example', () => {
  expect(
    numOfSlidingWindowIncreases([
      199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
    ])
  ).toEqual(5);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(1362);
});
