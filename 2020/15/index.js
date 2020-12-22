import readInput from "./../readInput.js";
import elfMemoryGame from "./elf_memory_game.js";

const startingNumbers = readInput("./input.txt")
  .split(",")
  .map((n) => +n);

// Question 15a
console.log(elfMemoryGame(startingNumbers, 2020));

// Question 15b
console.log(elfMemoryGame(startingNumbers, 30000000));
