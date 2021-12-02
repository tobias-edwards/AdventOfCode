import { readFile } from '../utils/file';

export const getDepths = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((n) => n)
    .map((n) => +n);

export const numOfIncreases = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
      count += 1;
    }
  }
  return count;
};

export default (filename) => {
  const depths = getDepths(filename);
  return numOfIncreases(depths);
};
