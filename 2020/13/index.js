import readInput from "./../readInput.js";
import { max } from "./../helpers/maths.js";

const busNotes = readInput("./input.txt").split("\n");
const busIds = busNotes[1].split(",");
const validBusIds = busIds.filter((id) => id !== "x").map((id) => +id);

// Question 13a
const earliestDepart = +busNotes[0];

let earliestBusId;
let shortestWaitTime = Infinity;

for (const busId of busIds) {
  const waitTime = busId - (earliestDepart % busId);
  if (waitTime < shortestWaitTime) {
    earliestBusId = busId;
    shortestWaitTime = waitTime;
  }
}

console.log(earliestBusId * shortestWaitTime);

// Question 13b
const largestBusId = max(validBusIds);
const largestBusIdInd = busIds.indexOf(largestBusId.toString());

const indRelativeToLargest = validBusIds.reduce((obj, id) => {
  obj[id] = busIds.indexOf(id.toString()) - largestBusIdInd;
  return obj;
}, {});

// Descending order to give bigger steps faster
const busIdsLeft = [...validBusIds].sort((a, b) => b - a).slice(1);

let i;
let step = largestBusId;
let nextBusId = +busIdsLeft.shift();
let firstFound = null;

// Iterate through possible values using incrementally larger steps to speed up the search
// Once a step is found, we can guarantee the bus IDs will appear with their current spacing
// on that every new (bigger) step
for (i = step; ; i += step) {
  if ((i + indRelativeToLargest[nextBusId]) % nextBusId === 0) {
    if (busIdsLeft.length === 0) {
      break;
    }

    if (firstFound) {
      step = i - firstFound;
      nextBusId = +busIdsLeft.shift();
      firstFound = null;
    } else {
      firstFound = i;
    }
  }
}

const earliestTime = i - largestBusIdInd;
console.log(earliestTime);
