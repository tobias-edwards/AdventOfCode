import path from 'path';

import solve, { calculatePosition, executeCommand } from './a';

test('example', () => {
  const instructions = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
  ];
  expect(
    calculatePosition({ depth: 0, horizontal: 0 }, executeCommand, instructions)
  ).toEqual({ horizontal: 15, depth: 10 });
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(1815044);
});
