// Advent of code: day 2

// Dive part b

const data = require("../utils").getInput();

function solution(input) {
  let distanceTotal = 0;
  let depthTotal = 0;
  let aimTotal = 0;

  for (let instruction of input) {
    let [direction, distance] = instruction.split(" ");

    distance = parseInt(distance);

    if (direction === "up") {
      aimTotal -= distance;
    } else if (direction === "down") {
      aimTotal += distance;
    } else {
      distanceTotal += distance;
      depthTotal += aimTotal * distance;
    }

    console.log(`AimTotal: ${aimTotal}`);
    console.log(`DistanceTotal: ${distanceTotal}`);
    console.log(`DepthTotal: ${depthTotal}`);
  }

  console.log(distanceTotal, depthTotal);

  return distanceTotal * depthTotal;
}

console.log(solution(data));