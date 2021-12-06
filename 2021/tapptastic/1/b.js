// Advent of code day: 1

// Sliding Window

const input = require("./util").getInput().map(n => parseInt(n));

function sumFromArray(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

function getWindowSlice(arr, start) {
  return arr.slice(start, start + 3);
}

function soultion() {
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    const windowSum = sumFromArray(getWindowSlice(input, i));
    const nextWindowSum = sumFromArray(getWindowSlice(input, i - 1));

    if (windowSum > nextWindowSum) {
      count++;
    }
  }

  return count;
}

console.log(soultion());
