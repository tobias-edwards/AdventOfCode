import { countOccurences } from "./../helpers/string.js";

class SeatLayout {
  constructor(layout) {
    this.layout = layout;
    this.maxRow = layout.length - 1;
    this.maxCol = layout[0].length - 1;
  }

  validCoordinate(x, y) {
    // Within seat layout
    return x >= 0 && x <= this.maxRow && y >= 0 && y <= this.maxCol;
  }

  countOccupiedSeats() {
    return this.layout.reduce(
      (total, row) => total + countOccurences([...row], "#"),
      0
    );
  }

  adjacentSeats(row, col, rule) {
    const adjSeats = [];

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (
          this.validCoordinate(row + dx, col + dy) &&
          !(dx === 0 && dy === 0)
        ) {
          const adjSeat =
            rule === "immediate"
              ? this.layout[row + dx][col + dy]
              : this.seatInDirection(row, col, dx, dy);
          if (adjSeat) {
            adjSeats.push(adjSeat);
          }
        }
      }
    }

    return adjSeats;
  }

  seatInDirection(row, col, dx, dy) {
    row += dx;
    col += dy;

    if (this.validCoordinate(row, col)) {
      const seatState = this.layout[row][col];

      if (seatState === ".") {
        return this.seatInDirection(row, col, dx, dy);
      } else {
        return seatState;
      }
    }
    return null;
  }

  runRules(adjacentSeatRule, occupiedSeatTolerance) {
    return this.layout.map((row, r) =>
      row
        .split("")
        .map((seat, c) => {
          const numOccupied = countOccurences(
            this.adjacentSeats(r, c, adjacentSeatRule),
            "#"
          );

          if (seat === "L") {
            if (numOccupied === 0) {
              return "#";
            }
          } else if (seat === "#") {
            if (numOccupied >= occupiedSeatTolerance) {
              return "L";
            }
          }
          return seat;
        })
        .join("")
    );
  }
}

export default SeatLayout;
