import readInput from "./../readInput.js";
import Program from "./program.js";

const instructions = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

const program = new Program(instructions);

// Question 8a
program.run();
console.log(program.acc);

// Question 8b
if (program.removeLoop()) {
  console.log(program.acc);
}
