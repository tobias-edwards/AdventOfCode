import { duplicates } from '../utils/array';
import { getLineSegments, getPointsBetween } from './a';

const isValidLineSegment = ([[x1, y1], [x2, y2]]) =>
  x1 === x2 || y1 === y2 || Math.abs(x2 - x1) === Math.abs(y2 - y1);

export default (filename) => {
  const lineSegments = getLineSegments(filename);
  const vents = lineSegments
    .filter((lineSegment) => isValidLineSegment(lineSegment))
    .map((lineSegment) => getPointsBetween(...lineSegment))
    .flat();

  return duplicates(vents).length;
};
