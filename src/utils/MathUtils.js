export const createRandomNum = (min, max) =>
  Math.floor(Math.random() * max) + min;

export const randomFromArray = (array) =>
  array[createRandomNum(0, array.length)];

export const performOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};
