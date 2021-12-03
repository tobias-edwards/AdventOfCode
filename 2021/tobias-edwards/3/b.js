import { getBinaryNumbers, getMostCommonBit } from './a';

export const calcOxygenGeneratorRating = (binaryNumbers, bitIndex = 0) => {
  if (binaryNumbers.length === 1) {
    return binaryNumbers[0];
  }

  const mostCommonBit = getMostCommonBit(
    binaryNumbers.map((binaryNumber) => +binaryNumber[bitIndex])
  );

  return calcOxygenGeneratorRating(
    binaryNumbers.filter(
      (binaryNumber) => binaryNumber[bitIndex] === mostCommonBit
    ),
    bitIndex + 1
  );
};

export const calcCO2ScrubberRating = (binaryNumbers, bitIndex = 0) => {
  if (binaryNumbers.length === 1) {
    return binaryNumbers[0];
  }

  const leastCommonBit =
    getMostCommonBit(
      binaryNumbers.map((binaryNumber) => +binaryNumber[bitIndex])
    ) === '1'
      ? '0'
      : '1';

  return calcCO2ScrubberRating(
    binaryNumbers.filter(
      (binaryNumber) => binaryNumber[bitIndex] === leastCommonBit
    ),
    bitIndex + 1
  );
};

export const lifeSupportRating = (oxygenGeneratorRating, co2ScrubberRating) =>
  parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);

export default (filename) => {
  const binaryNumbers = getBinaryNumbers(filename);
  const oxygenGeneratorRating = calcOxygenGeneratorRating(binaryNumbers);
  const co2ScrubberRating = calcCO2ScrubberRating(binaryNumbers);
  return lifeSupportRating(oxygenGeneratorRating, co2ScrubberRating);
};
