import { readFile } from '../utils/file';
import { sum } from '../utils/maths';

const MARKER = -1;

export const readBingoSubsystem = (filename) => {
  const [rawDrawnNumbers, ...rawBoards] = readFile(filename).split('\n\n');

  const drawnNumbers = rawDrawnNumbers.split(',').map((n) => +n);
  const boards = rawBoards.map((rawBoard) =>
    rawBoard
      .split('\n')
      .filter((rawLine) => rawLine)
      .map((rawLine) =>
        rawLine
          .split(' ')
          .filter((n) => n)
          .map((n) => +n)
      )
  );

  return [drawnNumbers, boards];
};

export const drawNumber = (numbersLeft) => numbersLeft[0];

const getBoardCol = (board, colIndex) =>
  board.reduce((col, row) => [...col, row[colIndex]], []);

const isBingoLine = (line) => line.every((number) => number === MARKER);

export const updateBoards = (boards, drawnNumber) =>
  boards.map((board) =>
    board.map((row) =>
      row.map((number) => (number === drawnNumber ? MARKER : number))
    )
  );

export const boardHasBingo = (board) =>
  board.some(
    (row, i) => isBingoLine(row) || isBingoLine(getBoardCol(board, i))
  );

export const unmarkedNumbers = (board) =>
  board.flat().filter((number) => number !== MARKER);

const playBingo = (numbersLeft, boards) => {
  if (numbersLeft.length === 0) {
    throw new Error('No boards have bingo');
  }

  const drawnNumber = drawNumber(numbersLeft);
  const updatedBoards = updateBoards(boards, drawnNumber);
  const bingoBoard = updatedBoards.find((board) => boardHasBingo(board));

  if (bingoBoard) {
    return [drawnNumber, bingoBoard];
  }
  return playBingo(
    numbersLeft.filter((number) => number !== drawnNumber),
    updatedBoards
  );
};

export default (filename) => {
  const [numbersLeft, boards] = readBingoSubsystem(filename);
  const [drawnNumber, bingoBoard] = playBingo(numbersLeft, boards);
  return sum(unmarkedNumbers(bingoBoard)) * drawnNumber;
};
