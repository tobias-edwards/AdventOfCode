import readInput from "./../readInput.js";
import { product } from "./../helpers/maths.js";
import TreeMap from "./tree_map.js";

const treeMapArr = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

const m = new TreeMap(treeMapArr);

// Problem 3a
console.log(m.setMovePattern("r3 d1").countTreeCollisions());

// Problem 3b
const treeCollisions = [
  m.setMovePattern("r1 d1").countTreeCollisions(),
  m.setMovePattern("r3 d1").countTreeCollisions(),
  m.setMovePattern("r5 d1").countTreeCollisions(),
  m.setMovePattern("r7 d1").countTreeCollisions(),
  m.setMovePattern("r1 d2").countTreeCollisions(),
];
console.log(product(treeCollisions));
