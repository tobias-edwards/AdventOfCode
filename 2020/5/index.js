import readInput from "./../readInput.js";
import { replace } from "./../helpers/string.js";
import binarySeatsKey from "./binary_seats_key.js";

const seats = readInput("./input.txt").split("\n");
const seatsAsBinary = seats.map((seat) => replace(seat, binarySeatsKey));

// Problem 4a
const highestSeat = seatsAsBinary.reduce(
  (max, curr) => (curr > max ? curr : max),
  ""
);
console.log(parseInt(highestSeat, 2));

// Problem 4b
const takenSeats = [...Array(2 ** 10)].map((x) => 0);
for (const binarySeat of seatsAsBinary) {
  takenSeats[parseInt(binarySeat, 2)] = 1;
}

// Avoid empty batch of seats at front (and back)
const firstTakenSeat = takenSeats.indexOf(1);
const mySeatId = takenSeats.slice(firstTakenSeat).indexOf(0) + firstTakenSeat;
console.log(mySeatId);
