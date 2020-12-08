import readFile from "./../readFile.js";
import { product, sum } from "./../helpers/maths.js";
import nNumbersSumTo from "./numbers_sum_to.js";

const sortedNumArr = readFile("./input.txt").then(
  (str) =>
    str
      .split("\n")
      .filter((x) => x) // Removes empty strings
      .map((n) => +n)
      .sort((a, b) => a - b) // Numerical order
);

// Problem 1a
sortedNumArr
  .then((sortedNums) => nNumbersSumTo(2, sortedNums, 2020))
  .then((numArr) => product(numArr))
  .then((result) => console.log(result));

// Problem 1b
sortedNumArr
  .then((sortedNums) => nNumbersSumTo(3, sortedNums, 2020))
  .then((numArr) => product(numArr))
  .then((result) => console.log(result));
