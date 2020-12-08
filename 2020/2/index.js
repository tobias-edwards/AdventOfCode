import readFile from "./../readFile.js";
import "./../helpers/prototypes.js";

const countOldJobValidPasswords = (passwordsDesc) => {
  let numValid = 0;
  const passwordPattern = /(\d+)-(\d+) (\w): (\w+)/;

  passwordsDesc.forEach((desc) => {
    let [, lower, upper, letter, password] = desc.match(passwordPattern);
    if (password.hasCharOccurences(letter, lower, upper)) {
      numValid++;
    }
  });

  return numValid;
};

const countTobogganValidPasswords = (passwordsDesc) => {
  let numValid = 0;
  const passwordPattern = /(\d+)-(\d+) (\w): (\w+)/;

  passwordsDesc.forEach((desc) => {
    let [, pos1, pos2, letter, password] = desc.match(passwordPattern);

    // XOR
    if ((password[pos1 - 1] === letter) !== (password[pos2 - 1] === letter)) {
      numValid++;
    }
  });

  return numValid;
};

const passwordsDesc = readFile("./input.txt").then((file) =>
  file.split("\n").filter((x) => x)
);

// Problem 2a
passwordsDesc
  .then((passwordsDesc) => countOldJobValidPasswords(passwordsDesc))
  .then((numValid) => console.log(numValid));

// Problem 2b
passwordsDesc
  .then((passwordsDesc) => countTobogganValidPasswords(passwordsDesc))
  .then((numValid) => console.log(numValid));
