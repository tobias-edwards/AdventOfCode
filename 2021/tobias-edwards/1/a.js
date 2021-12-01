const numOfIncreases = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      count += 1;
    }
  }
  return count;
};

export default numOfIncreases;
