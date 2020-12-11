import readFile from "./../readFile.js";
import { calcSeatId, getCol, getRow, getHighestSeat } from "./flight_seats.js";

const seats = readFile("./input.txt").then((file) => file.split("\n"));

// Problem 4a
seats
  .then((seats) => getHighestSeat(seats))
  .then((seat) => calcSeatId(getRow(seat), getCol(seat)))
  .then((seatId) => console.log(seatId));

// Problem 4b
seats
  .then((seats) => {
    // Mark taken seats in array
    const takenSeats = [...Array(calcSeatId(127, 7))].map((x) => 0);
    for (const seat of seats) {
      takenSeats[calcSeatId(getRow(seat), getCol(seat))] = 1;
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
