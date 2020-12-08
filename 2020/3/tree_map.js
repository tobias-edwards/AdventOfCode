class TreeMap {
  constructor(treeMap) {
    this.treeMap = treeMap;
    this._horizontalMove = 0;
    this._verticalMove = 0;
  }

  set horizontalMove(move) {
    this._horizontalMove = +move;
  }

  set verticalMove(move) {
    this._verticalMove = +move;
  }

  setMovePattern(moves) {
    [, this.horizontalMove, this.verticalMove] = moves.match(/r(\d+) d(\d+)/);
    return this;
  }

  countTreeCollisions() {
    let treeCollisions = 0;
    let col = 0;
    const lineLength = this.treeMap[0].length;

    for (let row = 0; row < this.treeMap.length; row += this._verticalMove) {
      if (this.treeMap[row][col % lineLength] === "#") {
        treeCollisions++;
      }
      col += this._horizontalMove;
    }
    return treeCollisions;
  }
}

export default TreeMap;
