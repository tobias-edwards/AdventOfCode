import { readFile } from '../utils/file';

export const getBinaryNumbers = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((n) => n);

export const mostCommonBitPositions = (binaryNumbers) => {
  const initialBitCounts = Array(binaryNumbers[0].length).fill(0);

  return binaryNumbers
    .reduce(
      (bitCounts, binaryNumber) =>
        bitCounts.map(
          (bitCount, i) => bitCount + (binaryNumber[i] === '1' ? 1 : -1)
        ),
      initialBitCounts
    )
    .map((bitCount) => (bitCount >= 0 ? '1' : '0'))
    .join('');
};

export const calcEpsilonRate = (gammaRate) => {
  const numBits = gammaRate.length;
  return 2 ** numBits - 1 - parseInt(gammaRate, 2);
};

export default (filename) => {
  const binaryNumbers = getBinaryNumbers(filename);
  const gammaRate = mostCommonBitPositions(binaryNumbers);
  const epsilonRate = calcEpsilonRate(gammaRate);
  return parseInt(gammaRate, 2) * epsilonRate;
};
