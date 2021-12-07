import { readFile } from '../utils/file';
import { sum } from '../utils/maths';

export const getSpawnTimes = (filename) =>
  readFile(filename)
    .split(',')
    .map((age) => +age);

const countSpawnGroupTimes = (spawnTimes) => {
  const groupCounts = Array(9).fill(0);
  spawnTimes.forEach((t) => {
    groupCounts[t] += 1;
  });
  return groupCounts;
};

const simulateFishSpawnDay = (spawnGroups) => {
  const numMultiplyingFish = spawnGroups.shift();
  /* eslint-disable no-param-reassign */
  spawnGroups[6] += numMultiplyingFish;
  spawnGroups[8] = numMultiplyingFish;
  /* eslint-enable no-param-reassign */
  return spawnGroups;
};

const simulateDays = (simulateSpawnDay, spawnTimeGroups, days) =>
  Array.from({ length: days }).reduce(
    (spawnTimes) => simulateSpawnDay(spawnTimes),
    spawnTimeGroups
  );

export default (filename, days) => {
  const spawnTimes = getSpawnTimes(filename);
  const spawnTimeGroups = countSpawnGroupTimes(spawnTimes);
  return sum(simulateDays(simulateFishSpawnDay, spawnTimeGroups, days));
};
