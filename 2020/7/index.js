import readInput from "./../readInput.js";
import Tree from "./tree/tree.js";

const bagRules = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

// Build tree
let tree = new Tree();
for (const bagRule of bagRules) {
  tree.addBagRule(bagRule);
}

// Question 7a
console.log(tree.findParentNodes("shiny gold").length);

// Question 7b
console.log(tree.countChildNodes("shiny gold"));
