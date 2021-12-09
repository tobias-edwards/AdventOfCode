import { arraysAreEqual } from '../utils/array';
import { sum } from '../utils/maths';
import { readEntries } from './a';

// TODO: Bit messy, cleaner approach?
// TODO: can memoize patterns to avoid recalculation

/*
 * Example: Pattern matching
[
  [1, 1, 0, 0, 0, 0, 0], // 1
  [1, 1, 0, 0, 1, 1, 0], // 4
  [1, 1, 0, 1, 0, 0, 0], // 7

  // Sum 5
  [1, 0, 1, 1, 0, 1, 1], // [2, 3, 5] => 2 (only digit without 'f' segment)
  [0, 1, 1, 1, 1, 1, 0], // [2, 3, 5] => 5, [1, 4, 7, 2] all have 'c' segment, 5 does not
  [1, 1, 1, 1, 0, 1, 0], // [2, 3, 5] => 3, by elimination of 2 and 5

  // Sum 6
  [1, 1, 1, 1, 1, 0, 1], // [0, 6, 9] => 0, [2, 3, 5] all have 'd' segment, 0 does not
  [0, 1, 1, 1, 1, 1, 1], // [0, 6, 9] => 6, [1, 4, 7] all have 'c' segment, 6 does not
  [1, 1, 1, 1, 1, 1, 0], // [0, 6, 9] => 9, by elimination of 0 and 6

  [1, 1, 1, 1, 1, 1, 1], // 8
];
 *
 */

const charIndex = (char) => char.charCodeAt() - 97;

const buildSegmentMatrix = (digit) => {
  const matrix = Array(7).fill(0);
  digit.split('').forEach((char) => {
    matrix[charIndex(char)] = 1;
  });
  return matrix;
};

const removeMultiDimensionalDuplicates = (arr) =>
  arr
    .map(JSON.stringify)
    .reverse()
    .filter((el, i, reversedArr) => reversedArr.indexOf(el, i + 1) === -1)
    .reverse()
    .map(JSON.parse);

const columnTotal = (matrices) => {
  const total = Array(7).fill(0);
  matrices.forEach((m) => {
    m.forEach((state, i) => {
      total[i] += state;
    });
  });
  return total;
};

const get1 = (matrices) => matrices.find((m) => sum(m) === 2);
const get2 = (matrices) => {
  const segmentFIndex = columnTotal(matrices).findIndex((total) => total === 9);
  return matrices.find((m) => sum(m) === 5 && m[segmentFIndex] === 0);
};
const get4 = (matrices) => matrices.find((m) => sum(m) === 4);
const get7 = (matrices) => matrices.find((m) => sum(m) === 3);
const get8 = (matrices) => matrices.find((m) => sum(m) === 7);
const get5 = (matrices) => {
  const matrices1247 = [
    get1(matrices),
    get2(matrices),
    get4(matrices),
    get7(matrices),
  ];
  const segmentCIndex = columnTotal(matrices1247).findIndex(
    (total) => total === 4
  );
  return matrices.find((m) => sum(m) === 5 && m[segmentCIndex] === 0);
};
const get3 = (matrices) => {
  const matrix2 = get2(matrices);
  const matrix5 = get5(matrices);

  return matrices.find(
    (m) =>
      sum(m) === 5 && !arraysAreEqual(m, matrix2) && !arraysAreEqual(m, matrix5)
  );
};
const get6 = (matrices) => {
  const matrices147 = [get1(matrices), get4(matrices), get7(matrices)];
  const matrices147ColumnTotal = columnTotal(matrices147);

  return matrices.find(
    (m) =>
      sum(m) === 6 &&
      m.some((state, i) => state === 0 && matrices147ColumnTotal[i] === 3)
  );
};
const get0 = (matrices) => {
  const matrices235 = [get2(matrices), get3(matrices), get5(matrices)];
  const matrices235ColumnTotal = columnTotal(matrices235);

  return matrices.find(
    (m) =>
      sum(m) === 6 &&
      m.some((state, i) => state === 0 && matrices235ColumnTotal[i] === 3)
  );
};
const get9 = (matrices) => {
  const matrix0 = get0(matrices);
  const matrix6 = get6(matrices);

  return matrices.find(
    (m) =>
      sum(m) === 6 && !arraysAreEqual(m, matrix0) && !arraysAreEqual(m, matrix6)
  );
};

const getDigits = (segmentMatrix) => {
  const patternDigitMap = {};
  const digitMap = {
    1: get1,
    4: get4,
    7: get7,
    8: get8,
    2: get2,
    5: get5,
    3: get3,
    6: get6,
    0: get0,
    9: get9,
  };

  Object.entries(digitMap).forEach(([digit, getDigit]) => {
    const digitPattern = getDigit(segmentMatrix, patternDigitMap);
    patternDigitMap[digitPattern] = digit;
  });

  return patternDigitMap;
};

const calcEntryOutput = (entry) => {
  const allDigitPatterns = entry.flat();
  const segmentMatrix = removeMultiDimensionalDuplicates(
    allDigitPatterns.reduce(
      (matrix, digitPattern) => [...matrix, buildSegmentMatrix(digitPattern)],
      []
    )
  );
  const digitPatternMap = getDigits(segmentMatrix);

  const outputPatterns = entry[1];
  return +outputPatterns
    .map((digitPattern) => digitPatternMap[buildSegmentMatrix(digitPattern)])
    .join('');
};

export default (filename) => {
  const entries = readEntries(filename);
  return sum(entries.map(calcEntryOutput));
};
