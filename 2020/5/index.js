import readFile from "./../readFile.js";
import { replace } from "./binary.js";

const seats = readFile("./input.txt").then((file) => file.split("\n"));

const binarySeatKey = { F: 0, B: 1, L: 0, R: 1 };

// Problem 4a
seats
  .then((seats) => seats.map((seat) => replace(seat, binarySeatKey)).sort())
  .then((sortedArr) => sortedArr[sortedArr.length - 1])
  .then((highestSeat) => parseInt(highestSeat, 2))
  .then((seatId) => console.log(seatId));

// Problem 4b
seats
  .then((seats) => {
    const takenSeats = [...Array(2 ** 10)].map((x) => 0);
    for (const seat of seats) {
      takenSeats[parseInt(replace(seat, binarySeatKey), 2)] = 1;
    }
    return takenSeats;
  })
  .then((takenSeats) => {
    // Return empty seat ID, avoiding empty batch at the front (and back)
    let validSeat = false;
    for (let i = 0; i < takenSeats.length; i++) {
      if (!validSeat) {
        if (takenSeats[i] === 1) {
          validSeat = true;
        }
      } else {
        if (takenSeats[i] === 0) {
          return i;
        }
      }
    }
  })
  .then((mySeatId) => console.log(mySeatId));
