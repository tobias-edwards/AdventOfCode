String.prototype.hasCharOccurences = function (char, lower, upper) {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) {
      total++;
    }

    if (total > upper || this.length - i - 1 < lower - total) {
      return false;
    }
  }
  return true;
};
