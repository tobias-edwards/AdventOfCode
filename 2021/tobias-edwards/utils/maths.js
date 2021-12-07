export const multiply = (arr) => arr.reduce((total, n) => total * n, 1);

export const sum = (arr) => arr.reduce((total, n) => total + n, 0);

export const mean = (arr) => sum(arr) / arr.length;

export const median = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = arr.length / 2;

  if (Number.isInteger(middle)) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  }
  return sortedArr[Math.floor(middle)];
};
