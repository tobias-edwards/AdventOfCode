import { mean, sum } from '../utils/maths';
import { getHorizontalPositions } from './a';

const triangularNumber = (n) => (n * (n + 1)) / 2;

const displacementsFromDestination = (positions, destination) =>
  positions.map((pos) => triangularNumber(Math.abs(destination - pos)));

export default (filename) => {
  const horizontalPositions = getHorizontalPositions(filename);
  const meanHorizontalPosition = mean(horizontalPositions);

  // Either floor() or ceil() of mean might result in lowest sum(displacementsFromDestination()) cost function
  return Math.min(
    sum(
      displacementsFromDestination(
        horizontalPositions,
        Math.floor(meanHorizontalPosition)
      )
    ),
    sum(
      displacementsFromDestination(
        horizontalPositions,
        Math.ceil(meanHorizontalPosition)
      )
    )
  );
};
