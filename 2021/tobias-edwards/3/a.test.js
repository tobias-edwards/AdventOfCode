import path from 'path';

import solve, { calcEpsilonRate, mostCommonBitPositions } from './a';

test('example', () => {
  const binaryNumbers = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];
  const gammaRate = mostCommonBitPositions(binaryNumbers);
  expect(gammaRate).toEqual('10110');
  expect(calcEpsilonRate(gammaRate)).toEqual(9);
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(2003336);
});
