import readInput from "./../readInput.js";
import { intersection } from "./../helpers/sets.js";

const groups = readInput("./input.txt").split("\n\n");

// Problem 6a
let nQuestionsYes = groups.reduce((total, group) => {
  const allGroupAnswers = group.replace(/\n/g, "");
  return total + new Set(allGroupAnswers).size;
}, 0);
console.log(nQuestionsYes);

// Problem 6b
let nQuestionsAllYes = groups.reduce((total, group) => {
  const groupAnswers = group.split("\n").filter((x) => x);
  return (
    total + intersection(...groupAnswers.map((answer) => new Set(answer))).size
  );
}, 0);
console.log(nQuestionsAllYes);
