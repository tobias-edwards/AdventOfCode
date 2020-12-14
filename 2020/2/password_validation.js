import { hasCharOccurences } from "../helpers/string.js";

const isValidOldJobPassword = (desc) => {
  const passwordPattern = /(\d+)-(\d+) (\w): (\w+)/;
  let [, lower, upper, letter, password] = desc.match(passwordPattern);
  return hasCharOccurences(password, letter, lower, upper);
};

const isValidTobogganPassword = (desc) => {
  const passwordPattern = /(\d+)-(\d+) (\w): (\w+)/;
  let [, pos1, pos2, letter, password] = desc.match(passwordPattern);

  // XOR
  return (password[pos1 - 1] === letter) !== (password[pos2 - 1] === letter);
};

export { isValidOldJobPassword, isValidTobogganPassword };
