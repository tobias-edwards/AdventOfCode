import { intersection } from '../utils/array';
import { sum } from '../utils/maths';
import { readEntries } from './a';

const entryOutput = (signalPatterns, outputPatterns) => {
  // Use digit patterns 1 and 4 only to figure out the rest
  const digitPattern1 = new Set(signalPatterns.find((p) => p.length === 2));
  const digitPattern4 = new Set(signalPatterns.find((p) => p.length === 4));

  const match = (pattern, patternSize, intersection1Size, intersection4Size) =>
    (!patternSize || pattern.size === patternSize) &&
    (!intersection1Size ||
      intersection(pattern, digitPattern1).size === intersection1Size) &&
    (!intersection4Size ||
      intersection(pattern, digitPattern4).size === intersection4Size);

  return +outputPatterns
    .map((pattern) => new Set(pattern))
    .map(
      (p) =>
        (match(p, 2) && '1') ||
        (match(p, 3) && '7') ||
        (match(p, 4) && '4') ||
        (match(p, 7) && '8') ||
        (match(p, 5, 2) && '3') ||
        (match(p, 5, 1, 2) && '2') ||
        (match(p, 5, 1, 3) && '5') ||
        (match(p, 6, 1) && '6') ||
        (match(p, 6, 2, 4) && '9') ||
        (match(p, 6, 2, 3) && '0')
    )
    .join('');
};

export default (filename) => {
  const entries = readEntries(filename);
  return sum(entries.map((entry) => entryOutput(...entry)));
};
