import readInput from "./../readInput.js";
import { removeDuplicates } from "./../helpers/array.js";

const bagRules = readInput("./input.txt")
  .split("\n")
  .filter((x) => x);

let bagNodes = {};

for (const bagRule of bagRules) {
  const [, parentBag, childrenBags] = bagRule.match(/(.*) bags contain (.*).$/);

  if (childrenBags === "no other bags") {
    continue;
  }

  for (const childBag of childrenBags.split(", ")) {
    const childBagName = childBag.match(/\d+ (.*) bags?/)[1];
    if (!(childBagName in bagNodes)) {
      bagNodes[childBagName] = [];
    }

    bagNodes[childBagName].push(parentBag);
  }
}

/*
for (const [name, containedBy] of Object.entries(bagNodes)) {
  console.log(name, containedBy);
}
*/

const _findParentBags = (childBag) => {
  if (!(childBag in bagNodes)) {
    return [];
  }

  return bagNodes[childBag]
    .map((parentBag) => [parentBag].concat(_findParentBags(parentBag)))
    .flat();
};

const findParentBags = (childBag) =>
  removeDuplicates(_findParentBags(childBag));

const root = "shiny gold";
console.log(findParentBags(root).length);
