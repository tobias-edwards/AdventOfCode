import path from 'path';

import solve, {
  calcCO2ScrubberRating,
  calcOxygenGeneratorRating,
  lifeSupportRating,
} from './b';

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
  const oxygenGeneratorRating = calcOxygenGeneratorRating(binaryNumbers);
  expect(oxygenGeneratorRating).toEqual('10111');

  const co2ScrubberRating = calcCO2ScrubberRating(binaryNumbers);
  expect(co2ScrubberRating).toEqual('01010');

  expect(lifeSupportRating(oxygenGeneratorRating, co2ScrubberRating)).toEqual(
    230
  );
});

test('puzzle input', () => {
  const answer = solve(path.resolve(__dirname, './input.txt'));
  expect(answer).toEqual(1877139);
});
