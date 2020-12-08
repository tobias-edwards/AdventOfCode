const findPairThatSumsTo = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let pairSum = arr[i] + arr[j];

      if (pairSum > target) {
        break;
      } else if (pairSum === target) {
        return [arr[i], arr[j]];
      }
    }
  }
};

const findTripleThatSumsTo = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        let tripleSum = arr[i] + arr[j] + arr[k];

        if (tripleSum > target) {
          break;
        } else if (tripleSum === target) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
};
