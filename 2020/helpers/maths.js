const max = (arr) => arr.reduce((max, curr) => (curr > max ? curr : max));

const min = (arr) => arr.reduce((min, curr) => (curr < min ? curr : min));

const product = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

export { max, min, product, sum };
