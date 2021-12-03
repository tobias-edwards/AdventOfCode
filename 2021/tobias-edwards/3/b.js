import { getBinaryNumbers, mostCommonBitPositions } from './a';

export const oxygenGeneratorRatingBitCriteria = (binaryNumbers) => {
  let binaryNumbersLeft = [...binaryNumbers];

  for (
    let i = 0;
    i < binaryNumbers[0].length && binaryNumbersLeft.length > 1;
    i += 1
  ) {
    const currentMostCommonBit = mostCommonBitPositions(binaryNumbersLeft)[i];
    binaryNumbersLeft = binaryNumbersLeft.filter(
      (binaryNumber) => binaryNumber[i] === currentMostCommonBit
    );
  }
  return binaryNumbersLeft[0];
};

export const co2ScrubberRatingBitCriteria = (binaryNumbers) => {
  let binaryNumbersLeft = [...binaryNumbers];

  for (
    let i = 0;
    i < binaryNumbers[0].length && binaryNumbersLeft.length > 1;
    i += 1
  ) {
    const currentLeastCommonBit =
      mostCommonBitPositions(binaryNumbersLeft)[i] === '1' ? '0' : '1';
    binaryNumbersLeft = binaryNumbersLeft.filter(
      (binaryNumber) => binaryNumber[i] === currentLeastCommonBit
    );
  }
  return binaryNumbersLeft[0];
};

export const lifeSupportRating = (oxygenGeneratorRating, co2ScrubberRating) =>
  parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);

export default (filename) => {
  const binaryNumbers = getBinaryNumbers(filename);
  const oxygenGeneratorRating = oxygenGeneratorRatingBitCriteria(binaryNumbers);
  const co2ScrubberRating = co2ScrubberRatingBitCriteria(binaryNumbers);
  return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
};
