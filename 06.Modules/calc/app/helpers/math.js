export const add = (n1, n2) => {
  return n1 + n2;
};

export const sub = (n1, n2) => {
  return n1 - n2;
};

export const multiply = (n1, n2) => {
  return n1 * n2;
};

export const divide = (n1, n2) => {
  return n1 / n2;
};

export const equals = (n1, n2, callback) => {
  return callback(n1, n2);
};
