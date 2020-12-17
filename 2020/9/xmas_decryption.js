import { sum } from "./../helpers/maths.js";

const hasPairSumTo = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const findInvalidXmasNumber = (nums, preLength) => {
  for (let i = preLength; i < nums.length; i++) {
    if (!hasPairSumTo(nums.slice(i - preLength, i), nums[i])) {
      return nums[i];
    }
  }
};

const findContiguousNumsSumTo = (nums, target, minLength) => {
  let i = minLength;
  const contiguousNums = nums.slice(0, i);

  while (i < nums.length) {
    let numsTotal = sum(contiguousNums);

    if (contiguousNums.length > 1 && numsTotal === target) {
      return contiguousNums;
    }

    if (numsTotal < target) {
      contiguousNums.push(nums[i++]);
    } else if (numsTotal >= target) {
      contiguousNums.shift();
    }
  }

  throw new Error("Contiguous sequence not found.");
};

export { findInvalidXmasNumber, findContiguousNumsSumTo };
