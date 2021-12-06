// Advent of code: day 1

// Submarine

// count the number of times a depth measurement is increased

const input = require('../../utils').getInput().map(n => parseInt(n));

function solution() {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(solution());