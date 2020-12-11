const getSeat = (seat, lower = 0, upper = 127) => {
  if (lower === upper) {
    return lower;
  }

  const partition = seat[0];
  if (partition === "F" || partition === "L") {
    return getSeat(seat.slice(1), lower, (lower + upper - 1) / 2);
  } else if (partition === "B" || partition === "R") {
    return getSeat(seat.slice(1), (lower + upper + 1) / 2, upper);
  }
};

const getCol = (seat) => getSeat(seat.slice(7), 0, 7);
const getRow = (seat) => getSeat(seat.slice(0, 7), 0, 127);

const calcSeatId = (row, col) => row * 8 + col;

const getHighestSeat = (seats) => {
  let highestSeat = "Z";

  for (const seat of seats) {
    const seatRow = seat.slice(0, 7);
    const highestSeatRow = highestSeat.slice(0, 7);

    if (seatRow < highestSeatRow) {
      highestSeat = seat;
    } else if (seatRow === highestSeatRow) {
      if (seat.slice(7) > highestSeat.slice(7)) {
        highestSeat = seat;
      }
    }
  }
  return highestSeat;
};

export { calcSeatId, getCol, getRow, getHighestSeat };
