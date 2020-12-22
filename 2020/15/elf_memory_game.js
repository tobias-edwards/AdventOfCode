const elfMemoryGame = (startingNumbers, n) => {
  const lastUsed = startingNumbers.reduce(
    (map, num, i) => map.set(num, i),
    new Map()
  );

  let nextNumber = 0;
  let lastNumber = nextNumber;

  for (let i = startingNumbers.length; i < n - 1; i++) {
    if (lastUsed.has(nextNumber)) {
      nextNumber = i - lastUsed.get(nextNumber);
    } else {
      nextNumber = 0;
    }
    lastUsed.set(lastNumber, i);
    lastNumber = nextNumber;
  }

  return lastNumber;
};

export default elfMemoryGame;
