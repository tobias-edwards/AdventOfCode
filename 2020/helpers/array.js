const countValid = (arr, pred) =>
  arr.reduce((acc, curr) => (pred(curr) ? acc + 1 : acc), 0);

export { countValid };
