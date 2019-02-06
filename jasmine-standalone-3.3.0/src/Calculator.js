function Calculator(){};

Calculator.prototype.multiply = function (n1, n2) {
  return n1 * n2;
};

Calculator.prototype.add = function (n1, n2) {
  return n1 + n2;
};

Calculator.prototype.divide = function (n1, n2) {
  if (n2 === 0) {
    throw new Error ('Cannot divide a number by 0!');
  } else {
    return n1 / n2;
  };
};

Calculator.prototype.subtract = function (n1, n2) {
  return n1 - n2;
};

Calculator.prototype.square = function (n) {
  return n * n;
};

user_input = prompt("What do you want to do?");
