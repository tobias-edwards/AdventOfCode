import { readFile } from '../utils/file';

export const readInstructions = (filename) =>
  readFile(filename)
    .split('\n')
    .filter((n) => n);

export const executeCommand = (position, command, value) => {
  const newPosition = { ...position };
  switch (command) {
    case 'down':
      newPosition.depth += value;
      break;
    case 'forward':
      newPosition.horizontal += value;
      break;
    case 'up':
      newPosition.depth -= value;
      break;
  }
  return newPosition;
};

export const calculatePosition = (startPosition, commandRules, instructions) =>
  instructions.reduce((currentPosition, instruction) => {
    const [command, value] = instruction.split(' ');
    return commandRules(currentPosition, command, +value);
  }, startPosition);

export default (filename) => {
  const instructions = readInstructions(filename);
  const finalPosition = calculatePosition(
    {
      depth: 0,
      horizontal: 0,
    },
    executeCommand,
    instructions
  );
  return finalPosition.horizontal * finalPosition.depth;
};
