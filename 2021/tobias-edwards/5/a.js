import { duplicates } from '../utils/array';
import { readFile } from '../utils/file';

export const getLineSegments = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((line) => line)
    .map((lineSegment) => {
      const [, x1, y1, x2, y2] = lineSegment.match(
        /(\d+),(\d+) -> (\d+),(\d+)/
      );
      return [
        [+x1, +y1],
        [+x2, +y2],
      ];
    });

export const getPointsBetween = ([x1, y1], [x2, y2]) => {
  if (x1 === x2 && y1 === y2) {
    return [[x1, y1]];
  }

  const moveTowards = (p1, p2) => {
    if (p2 - p1 > 0) return p1 + 1;
    if (p2 - p1 === 0) return p1;
    return p1 - 1;
  };

  return [
    [x1, y1],
    ...getPointsBetween([moveTowards(x1, x2), moveTowards(y1, y2)], [x2, y2]),
  ];
};

const isValidLineSegment = ([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2;

export default (filename) => {
  const lineSegments = getLineSegments(filename);
  const vents = lineSegments
    .filter((lineSegment) => isValidLineSegment(lineSegment))
    .map((lineSegment) => getPointsBetween(...lineSegment))
    .flat();

  return duplicates(vents).length;
};
