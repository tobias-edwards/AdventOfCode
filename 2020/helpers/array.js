const countValid = (arr, pred) =>
  arr.reduce((acc, curr) => (pred(curr) ? acc + 1 : acc), 0);

const equal = (arrA, arrB) => {
  if (!Array.isArray(arrA) && !Array.isArray(arrB)) {
    return arrA === arrB;
  }

  if (arrA.length !== arrB.length) {
    return false;
  }

  for (let i = 0; i < arrA.length; i++) {
    if (!equal(arrA[i], arrB[i])) {
      return false;
    }
  }
  return true;
};

const removeDuplicates = (arr) => [...new Set(arr)];

export { countValid, equal, removeDuplicates };
