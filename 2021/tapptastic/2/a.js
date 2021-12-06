// Advent of code: day 2

// Dive

const input = require("../utils").getInput();

function solution() {
  let distanceTotal = 0;
  let depthTotal = 0;

  for (let instruction of input) {
    let [direction, distance] = instruction.split(" ");

    distance = parseInt(distance);

    if (direction === "up") {
      depthTotal -= distance;
    } else if (direction === "down") {
      depthTotal += distance;
    } else {
      distanceTotal += distance;
    }
  }
  return distanceTotal * depthTotal;
}

console.log(solution());
