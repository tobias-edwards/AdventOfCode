import path from 'path';

import { calculatePosition } from './a';
import solve, { executeCommand } from './b';

test('example', () => {
  expect(
    calculatePosition({ aim: 0, depth: 0, horizontal: 0 }, executeCommand, [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2',
    ])
  ).toEqual({ aim: 10, horizontal: 15, depth: 60 });
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(1739283308);
});
