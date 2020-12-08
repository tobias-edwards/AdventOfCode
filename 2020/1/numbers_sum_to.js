import { product, sum } from "./../helpers/maths.js";

const nNumbersSumTo = (
  n,
  sortedArr,
  target,
  currentLevel = n,
  numsToSum = new Array(n)
) => {
  for (let i = 0; i < sortedArr.length; i++) {
    numsToSum[currentLevel - 1] = sortedArr[i];

    if (currentLevel > 1) {
      // Recursive nested for-loops to generate n-combinations
      if (
        nNumbersSumTo(
          n,
          sortedArr.slice(i + 1),
          target,
          currentLevel - 1,
          numsToSum
        )
      )
        return numsToSum;
    } else if (currentLevel === 1) {
      const numsSum = sum(numsToSum);

      // If sorted, can exit inner loop early
      if (numsSum > target) {
        break;
      } else if (numsSum === target) {
        return numsToSum;
      }
    }
  }
};

export default nNumbersSumTo;
