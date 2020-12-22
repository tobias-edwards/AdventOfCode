import readInput from "./../readInput.js";
import cliProgress from "cli-progress";

const startingNumbers = readInput("./input.txt")
  .split(",")
  .map((n) => +n);

const elfMemoryGame = (startingNumbers, n) => {
  const prevNumbers = startingNumbers.reduce((obj, n, i) => {
    obj[n] = i;
    return obj;
  }, {});

  let nextNumber = 0;
  let lastNumber = 0;

  const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  bar1.start(n - 2, 0);

  for (let i = startingNumbers.length; i < n - 1; i++) {
    if (nextNumber in prevNumbers) {
      nextNumber = i - prevNumbers[nextNumber];
    } else {
      nextNumber = 0;
    }
    prevNumbers[lastNumber] = i;
    lastNumber = nextNumber;
    bar1.update(i);
  }
  bar1.stop();

  return lastNumber;
};

// Question 15a
console.log(elfMemoryGame(startingNumbers, 2020));

// Question 15b
console.log(elfMemoryGame(startingNumbers, 30000000));
