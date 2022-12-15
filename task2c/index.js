let correctAnswer = 70;
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function calc(numA, numB) {
  numA = double(numA);
  numA = square(numA);
  numA = multiply(numA, numB);
  numA = add(1, numA);

  let answer = add(numA, numB) + 1;
  if (answer === correctAnswer) {
    return "Correct!";
  }
  return "Incorrect!";

  
}

/* DO NOT CHANGE THE CODE BELOW */
calc(2, 4)
module.exports= { calc}

