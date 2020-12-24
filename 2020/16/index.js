import readInput from "./../readInput.js";
import { difference } from "./../helpers/sets.js";
import { product, sum } from "./../helpers/maths.js";

const [rawFields, rawMyTicket, rawNearbyTickets] = readInput(
  "./input.txt"
).split("\n\n");

const parseTicketValues = (ticket) => ticket.split(",").map((value) => +value);

const myTicket = parseTicketValues(rawMyTicket.split("\n")[1]);

const nearbyTickets = rawNearbyTickets
  .split("\n")
  .splice(1)
  .filter((t) => t)
  .map((ticket) => parseTicketValues(ticket));

const inRange = (rawRanges) => (value) => {
  const ranges = rawRanges.match(/(\d+)-(\d+)/g);
  return ranges.some((range) => {
    const [lower, upper] = range.split("-").map((n) => +n);
    return value >= lower && value <= upper;
  });
};

const fields = rawFields.split("\n").reduce((obj, fieldSpec) => {
  const [, name, ranges] = fieldSpec.match(/(.*): (.*)/);
  obj[name] = inRange(ranges);
  return obj;
}, {});

const validForAnyField = (value) =>
  Object.values(fields).some((isValid) => isValid(value));

const invalidTicketValues = nearbyTickets
  .map((ticket) => ticket.filter((value) => !validForAnyField(value)))
  .flat();

console.log(sum(invalidTicketValues));

// Question 16b
const validNearbyTickets = nearbyTickets.filter((ticket) =>
  ticket.every((value) => validForAnyField(value))
);

const fieldCandidates = {};
const numFields = Object.keys(fields).length;

for (const [name, isValid] of Object.entries(fields)) {
  for (let i = 0; i < numFields; i++) {
    if (validNearbyTickets.every((ticket) => isValid(ticket[i]))) {
      if (!(name in fieldCandidates)) {
        fieldCandidates[name] = [];
      }
      fieldCandidates[name].push(i);
    }
  }
}

const sortedFieldCandidates = Object.entries(fieldCandidates).sort(
  ([, a], [, b]) => a.length - b.length
);

const assignedIndexes = new Set();

const fieldIndexes = sortedFieldCandidates.reduce((obj, [name, candidates]) => {
  const freeIndex = [...difference(new Set(candidates), assignedIndexes)][0];
  obj[name] = freeIndex;
  assignedIndexes.add(freeIndex);
  return obj;
}, {});

const departureIndexes = Object.keys(fieldIndexes)
  .filter((name) => /^departure/.test(name))
  .map((key) => fieldIndexes[key]);

const departureValues = myTicket.filter((value, i) =>
  departureIndexes.includes(i)
);

console.log(product(departureValues));
