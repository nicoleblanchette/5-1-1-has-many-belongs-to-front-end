const makeCounter = (id = 0) => {
  return () => ++id;
};

const getId = makeCounter();

export default getId;