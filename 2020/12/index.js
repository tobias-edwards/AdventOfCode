import readInput from "./../readInput.js";
import Boat from "./boat.js";

const directions = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

const boat = new Boat();

// Question 12a
for (const direction of directions) {
  boat.move(direction);
}

console.log(boat.manhattanDistance());

// Question 12b
boat.resetPosition();

for (const direction of directions) {
  boat.newMove(direction);
}

console.log(boat.manhattanDistance());
