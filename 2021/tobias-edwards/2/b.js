import { calculatePosition, readInstructions } from './a';

export const executeCommand = (position, command, value) => {
  const newPosition = { ...position };
  switch (command) {
    case 'down':
      newPosition.aim += value;
      break;
    case 'forward':
      newPosition.horizontal += value;
      newPosition.depth += newPosition.aim * value;
      break;
    case 'up':
      newPosition.aim -= value;
      break;
  }
  return newPosition;
};

export default (filename) => {
  const instructions = readInstructions(filename);
  const finalPosition = calculatePosition(
    {
      aim: 0,
      depth: 0,
      horizontal: 0,
    },
    executeCommand,
    instructions
  );
  return finalPosition.horizontal * finalPosition.depth;
};
