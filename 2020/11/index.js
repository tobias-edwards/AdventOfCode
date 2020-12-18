import readInput from "./../readInput.js";
import { equal } from "./../helpers/array.js";
import { countOccurences } from "./../helpers/string.js";

const seatRows = readInput("./input.txt").split("\n");

class SeatLayout {
  constructor(layout) {
    this.layout = layout;
    this.maxRow = layout.length - 1;
    this.maxCol = layout[0].length - 1;
  }

  adjacentSeats(row, col) {
    const adjSeats = [];
    let adjSeat = "";

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (
          row + dx >= 0 &&
          row + dx <= this.maxRow &&
          col + dy >= 0 &&
          col + dy <= this.maxCol &&
          (dx !== 0 || dy !== 0)
        ) {
          adjSeats.push(this.layout[row + dx][col + dy]);
        }
      }
    }

    return adjSeats;
  }

  runRules() {
    return this.layout.map((row, r) =>
      row
        .split("")
        .map((seat, c) => {
          const numOccupied = countOccurences(this.adjacentSeats(r, c), "#");
          //console.log(`(${r}, ${c}): ${numOccupied}`);
          if (seat === "L") {
            if (numOccupied === 0) {
              return "#";
            }
          } else if (seat === "#") {
            if (numOccupied >= 4) {
              return "L";
            }
          }
          return seat;
        })
        .join("")
    );
  }
}

const seats = new SeatLayout(seatRows);

let nextLayout;
while (!equal(seats.layout, (nextLayout = seats.runRules()))) {
  seats.layout = nextLayout;
}

const occupiedSeats = seats.layout.reduce(
  (total, row) => total + countOccurences([...row], "#"),
  0
);
console.log(occupiedSeats);
