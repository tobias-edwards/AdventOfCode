export const intersection = (set1, set2) => {
  const inBoth = new Set();
  set1.forEach((el) => {
    if (set2.has(el)) inBoth.add(el);
  });
  return inBoth;
};

const count = (arr) =>
  arr.reduce((counts, el) => {
    /* eslint-disable-next-line no-param-reassign */
    counts[el] = Object.prototype.hasOwnProperty.call(counts, el)
      ? counts[el] + 1
      : 1;
    return counts;
  }, {});

export const duplicates = (arr) => {
  const counts = count(arr);
  return Object.keys(counts).filter((key) => counts[key] > 1);
};
