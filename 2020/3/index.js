import readFile from "./../readFile.js";
import { product } from "./../helpers/maths.js";
import TreeMap from "./tree_map.js";

const treeMapArr = readFile("./input.txt").then((file) =>
  file.split("\n").filter((x) => x)
);

// Problem 3a
treeMapArr
  .then((mapArr) => {
    const m = new TreeMap(mapArr);
    return m.setMovePattern("r3 d1").countTreeCollisions();
  })
  .then((result) => console.log(result));

// Problem 3b
treeMapArr
  .then((mapArr) => {
    const m = new TreeMap(mapArr);
    return [
      m.setMovePattern("r1 d1").countTreeCollisions(),
      m.setMovePattern("r3 d1").countTreeCollisions(),
      m.setMovePattern("r5 d1").countTreeCollisions(),
      m.setMovePattern("r7 d1").countTreeCollisions(),
      m.setMovePattern("r1 d2").countTreeCollisions(),
    ];
  })
  .then((treeCollisions) => product(treeCollisions))
  .then((result) => console.log(result));
