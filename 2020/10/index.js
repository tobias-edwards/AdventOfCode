import readInput from "./../readInput.js";
import { max } from "./../helpers/maths.js";

const adapaterJoltages = readInput("./input.txt")
  .split("\n")
  .filter((x) => x)
  .map((n) => +n);

const deviceJoltage = max(adapaterJoltages) + 3;
const joltageConnections = [
  0,
  ...adapaterJoltages.sort((a, b) => a - b),
  deviceJoltage,
];

// Question 10a
const joltageDiff = {
  1: 0,
  2: 0,
  3: 0,
};

for (let i = 1; i < joltageConnections.length; i++) {
  const diff = joltageConnections[i] - joltageConnections[i - 1];
  joltageDiff[diff]++;
}

console.log(joltageDiff[1] * joltageDiff[3]);

// Question 10b
const branches = {};
branches[deviceJoltage] = 1;

// Traverse through sorted joltages in reverse, and
// memoize the number of arrangements (branches) from each value
for (let i = joltageConnections.length - 2; i >= 0; i--) {
  const currentJoltage = joltageConnections[i];

  if (!(currentJoltage in branches))
    branches[currentJoltage] = branches[joltageConnections[i + 1]];

  // Check for three-way branch
  if (joltageConnections[i + 3] - currentJoltage <= 3) {
    branches[currentJoltage] =
      branches[joltageConnections[i + 1]] +
      branches[joltageConnections[i + 2]] +
      branches[joltageConnections[i + 3]];
  }
  // Check for two-way branch
  else if (joltageConnections[i + 2] - currentJoltage <= 3) {
    branches[currentJoltage] =
      branches[joltageConnections[i + 1]] + branches[joltageConnections[i + 2]];
  }
}

console.log(branches[0]);
