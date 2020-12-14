import readInput from "../readInput.js";
import { product } from "./../helpers/maths.js";
import nNumbersSumTo from "./numbers_sum_to.js";

const sortedNumArr = readInput("./input.txt")
  .split("\n")
  .filter((x) => x) // Removes empty strings
  .map((n) => +n)
  .sort((a, b) => a - b); // Numerical order

// Problem 1a
const sum2020Arr2 = nNumbersSumTo(2, sortedNumArr, 2020);
console.log(product(sum2020Arr2));

// Problem 1b
const sum2020Arr3 = nNumbersSumTo(3, sortedNumArr, 2020);
console.log(product(sum2020Arr3));
