export const getAdjacent = (hyp, deg) => hyp * Math.cos(toRadians(deg));

export const getOpposite = (hyp, deg) => hyp * Math.sin(toRadians(deg));

export const max = (arr) =>
  arr.reduce((max, curr) => (curr > max ? curr : max));

export const min = (arr) =>
  arr.reduce((min, curr) => (curr < min ? curr : min));

export const product = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

export const rotatePointAbout = (pointX, pointY, deg, pivotX, pivotY) => {
  const c = Math.cos(toRadians(deg));
  const s = Math.sin(toRadians(deg));

  // Translate point back to origin
  pointX -= pivotX;
  pointY -= pivotY;

  // Rotate point about origin
  let newX = pointX * c - pointY * s;
  let newY = pointX * s + pointY * c;

  // Translate point back
  newX += pivotX;
  newY += pivotY;

  return [newX, newY];
};

export const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

export const toRadians = (deg) => deg * (Math.PI / 180);
