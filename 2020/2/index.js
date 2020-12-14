import readInput from "./../readInput.js";
import {
  isValidOldJobPassword,
  isValidTobogganPassword,
} from "./password_validation.js";
import { countValid } from "./../helpers/array.js";

const passwordList = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

// Problem 2a
console.log(countValid(passwordList, isValidOldJobPassword));

// Problem 2b
console.log(countValid(passwordList, isValidTobogganPassword));
