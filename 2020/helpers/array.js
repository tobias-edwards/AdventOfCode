const countValid = (arr, pred) =>
  arr.reduce((acc, curr) => (pred(curr) ? acc + 1 : acc), 0);

const removeDuplicates = (arr) => [...new Set(arr)];

export { countValid, removeDuplicates };
