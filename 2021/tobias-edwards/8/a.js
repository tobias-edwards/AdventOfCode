import { readFile } from '../utils/file';

export const readEntries = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((entry) => entry)
    .map((entry) => entry.split(' | ').map((values) => values.split(' ')));

export default (filename) => {
  const entries = readEntries(filename);
  return entries.reduce(
    (total, [, outputs]) =>
      total +
      outputs.reduce(
        (uniqueTotal, output) =>
          uniqueTotal + ([2, 3, 4, 7].includes(output.length) ? 1 : 0),
        0
      ),
    0
  );
};
