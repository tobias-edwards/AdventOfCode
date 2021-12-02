import { sum } from '../utils/maths';
import { getDepths } from './a';

export const numOfSlidingWindowIncreases = (arr, windowSize = 3) => {
  const slidingWindow = (start) => sum(arr.slice(start, start + windowSize));

  let count = 0;
  for (let i = 1; i < arr.length - windowSize + 1; i += 1) {
    if (slidingWindow(i) > slidingWindow(i - 1)) {
      count += 1;
    }
  }
  return count;
};

export default (filename) => {
  const depths = getDepths(filename);
  return numOfSlidingWindowIncreases(depths);
};
