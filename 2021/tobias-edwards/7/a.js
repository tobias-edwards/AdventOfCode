import { readFile } from '../utils/file';
import { median, sum } from '../utils/maths';

export const getHorizontalPositions = (filename) =>
  readFile(filename)
    .split(',')
    .map((age) => +age);

const displacementsFromDestination = (positions, destination) =>
  positions.map((pos) => Math.abs(destination - pos));

export default (filename) => {
  const horizontalPositions = getHorizontalPositions(filename);
  const medianHorizontalPosition = Math.round(median(horizontalPositions));
  return sum(
    displacementsFromDestination(horizontalPositions, medianHorizontalPosition)
  );
};
