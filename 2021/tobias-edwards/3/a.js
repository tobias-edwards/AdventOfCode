import { readFile } from '../utils/file';
import { sum } from '../utils/maths';

export const getBinaryNumbers = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((n) => n);

export const getMostCommonBit = (bits) =>
  sum(bits) >= bits.length / 2 ? '1' : '0';

export const calcGammaRate = (binaryNumbers) => {
  const numBits = binaryNumbers[0].length;
  return Array.from(Array(numBits), (_, i) =>
    getMostCommonBit(binaryNumbers.map((bin) => +bin[i]))
  ).join('');
};

export const calcEpsilonRate = (gammaRate) => {
  const numBits = gammaRate.length;
  return 2 ** numBits - 1 - parseInt(gammaRate, 2);
};

const powerConsumption = (gammaRate, epsilonRate) => gammaRate * epsilonRate;

export default (filename) => {
  const binaryNumbers = getBinaryNumbers(filename);
  const gammaRate = calcGammaRate(binaryNumbers);
  const epsilonRate = calcEpsilonRate(gammaRate);
  return powerConsumption(parseInt(gammaRate, 2), epsilonRate);
};
