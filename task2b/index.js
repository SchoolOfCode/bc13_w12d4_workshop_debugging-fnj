function add(numb1, numb2) {
  let num1 = Number(numb1);
  let num2 = Number(numb2);
  return num1 + num2;
}

function multiply(num1, operator, num2) {
  if (operator === "*") {
    return num1 * num2;
  } else {
    return "Invalid inputs. Try again!";
  }
}

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return `${firstName} ${lastName} has a pet`;
  } else {
    return `${firstName} ${lastName} does not have a pet`;
  }
}

let myAccountNumbers = {
  account1: "220",
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers[1];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return firstNumber + secondNumber;
  
  }
  if (operator === "-") {
    return firstNumber - secondNumber;
     
  }
  if (operator === "*") {
    return firstNumber * secondNumber;
     
  }
  if (operator === "/") {
    return firstNumber / secondNumber;
    
  } else {
    return "Invalid inputs. Try again!";
    
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
