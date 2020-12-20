import readInput from "./../readInput.js";
import SeatLayout from "./seat_layout.js";
import { equal } from "./../helpers/array.js";

const seatRows = readInput("./input.txt").split("\n");
const seats = new SeatLayout(seatRows);
let nextLayout;

// Question 11a
while (!equal(seats.layout, (nextLayout = seats.runRules("immediate", 4)))) {
  seats.layout = nextLayout;
}
console.log(seats.countOccupiedSeats());

// Question 11b
seats.layout = seatRows;

while (!equal(seats.layout, (nextLayout = seats.runRules("direction", 5)))) {
  seats.layout = nextLayout;
}
console.log(seats.countOccupiedSeats());
