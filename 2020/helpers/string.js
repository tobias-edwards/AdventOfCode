const hasCharOccurences = (str, char, lower, upper) => {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      total++;
    }

    if (total > upper || str.length - i - 1 < lower - total) {
      return false;
    }
  }
  return true;
};

const replace = (str, key) => {
  const keys = Object.keys(key).join();
  return str.replace(new RegExp(`[${keys}]`, "g"), (char) => key[char]);
};

export { hasCharOccurences, replace };
