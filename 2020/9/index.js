import readInput from "./../readInput.js";
import {
  findInvalidXmasNumber,
  findContiguousNumsSumTo,
} from "./xmas_decryption.js";
import { max, min } from "./../helpers/maths.js";

const nums = readInput("./input.txt")
  .split("\n")
  .map((n) => +n);

// Question 9a
const invalidNum = findInvalidXmasNumber(nums, 25);
console.log(invalidNum);

// Question 9b
const contiguousNums = findContiguousNumsSumTo(nums, invalidNum, 2);
console.log(min(contiguousNums) + max(contiguousNums));
