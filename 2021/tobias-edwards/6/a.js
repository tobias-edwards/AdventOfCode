import { readFile } from '../utils/file';

export const getFishInternalTimers = (filename) =>
  readFile(filename)
    .split(',')
    .map((age) => +age);

const fastForward = (fishInternalTimers, days) => {
  if (days === 0) {
    return fishInternalTimers;
  }

  return fastForward(
    fishInternalTimers
      .map((timer) => {
        if (timer === 0) {
          return [6, 8];
        }
        return timer - 1;
      })
      .flat(),
    days - 1
  );
};

export default (filename, days) => {
  const fishInternalTimers = getFishInternalTimers(filename);
  return fastForward(fishInternalTimers, days).length;
};
