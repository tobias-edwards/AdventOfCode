import { sum } from '../utils/maths';
import {
  boardHasBingo,
  drawNumber,
  readBingoSubsystem,
  unmarkedNumbers,
  updateBoards,
} from './a';

const findLastBingoBoard = (numbersLeft, boardsLeftToBingo) => {
  if (numbersLeft.length === 0) {
    throw new Error(`Multiple boards were last to bingo`);
  }

  const drawnNumber = drawNumber(numbersLeft);
  const updatedBoardsLeftToBingo = updateBoards(boardsLeftToBingo, drawnNumber);

  if (
    updatedBoardsLeftToBingo.length === 1 &&
    boardHasBingo(updatedBoardsLeftToBingo[0])
  ) {
    return [drawnNumber, updatedBoardsLeftToBingo[0]];
  }

  return findLastBingoBoard(
    numbersLeft.filter((number) => number !== drawnNumber),
    updatedBoardsLeftToBingo.filter((board) => !boardHasBingo(board))
  );
};

export default (filename) => {
  const [numbersLeft, boards] = readBingoSubsystem(filename);
  const [drawnNumber, lastBingoBoard] = findLastBingoBoard(numbersLeft, boards);
  return sum(unmarkedNumbers(lastBingoBoard)) * drawnNumber;
};
