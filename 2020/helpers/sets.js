const difference = (setA, setB) =>
  new Set([...setA].filter((el) => !setB.has(el)));

const intersection = (setA, ...restSets) => {
  if (restSets.length === 0) {
    return setA;
  }

  let _intersection = [...setA];
  for (const nextSet of restSets) {
    _intersection = _intersection.filter((el) => nextSet.has(el));
  }
  return new Set(_intersection);
};

export { difference, intersection };
