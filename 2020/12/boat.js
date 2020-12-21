import {
  getAdjacent,
  getOpposite,
  rotatePointAbout,
} from "./../helpers/maths.js";

class Boat {
  constructor() {
    this.northPosition = 0;
    this.eastPosition = 0;
    this.orientation = 0;

    // Relative to ship
    this.waypointEastPosition = 10;
    this.waypointNorthPosition = 1;
  }

  parseDirection(direction) {
    const directionGroups = direction.match(/(\w)(\d+)/);
    const action = directionGroups[1];
    const value = +directionGroups[2];
    return [action, value];
  }

  move(direction) {
    const [action, value] = this.parseDirection(direction);

    if (action === "N") {
      this.northPosition += value;
    } else if (action === "S") {
      this.northPosition -= value;
    } else if (action === "E") {
      this.eastPosition += value;
    } else if (action === "W") {
      this.eastPosition -= value;
    } else if (action === "L") {
      this.orientation += value;
    } else if (action === "R") {
      this.orientation -= value;
    } else if (action === "F") {
      this.northPosition += Math.round(getOpposite(value, this.orientation));
      this.eastPosition += Math.round(getAdjacent(value, this.orientation));
    } else {
      throw Error("Invalid instruction: " + direction);
    }
  }

  newMove(direction) {
    const [action, value] = this.parseDirection(direction);

    if (action === "N") {
      this.waypointNorthPosition += value;
    } else if (action === "S") {
      this.waypointNorthPosition -= value;
    } else if (action === "E") {
      this.waypointEastPosition += value;
    } else if (action === "W") {
      this.waypointEastPosition -= value;
    } else if (action === "L") {
      // Waypoint position is relative to boat position
      // Effectively, rotation is about (0, 0)
      const newPoint = rotatePointAbout(
        this.waypointEastPosition,
        this.waypointNorthPosition,
        value,
        0,
        0
      );
      this.waypointEastPosition = Math.round(newPoint[0]);
      this.waypointNorthPosition = Math.round(newPoint[1]);
    } else if (action === "R") {
      const newPoint = rotatePointAbout(
        this.waypointEastPosition,
        this.waypointNorthPosition,
        -value,
        0,
        0
      );
      this.waypointEastPosition = Math.round(newPoint[0]);
      this.waypointNorthPosition = Math.round(newPoint[1]);
    } else if (action === "F") {
      this.northPosition += value * this.waypointNorthPosition;
      this.eastPosition += value * this.waypointEastPosition;
    } else {
      throw Error("Invalid instruction: " + direction);
    }
  }

  manhattanDistance() {
    return Math.abs(this.eastPosition) + Math.abs(this.northPosition);
  }

  resetPosition() {
    this.northPosition = 0;
    this.eastPosition = 0;
    this.orientation = 0;
  }
}

export default Boat;
