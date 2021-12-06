export const count = (arr) => {
  const counts = {};
  arr.forEach((item) => {
    counts[item] = Object.prototype.hasOwnProperty.call(counts, item)
      ? counts[item] + 1
      : 1;
  });
  return counts;
};

export const duplicates = (arr) => {
  const counts = count(arr);
  return Object.keys(counts).filter((key) => counts[key] > 1);
};
