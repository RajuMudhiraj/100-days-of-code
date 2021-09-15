
//Reverse String
const strBtn = document.getElementById("strBtn");
strBtn.addEventListener("click", reverseString);

function reverseString() {
  const string = document.getElementById("string").value;
  const stringDisplay = document.getElementById("stringDisplay");
  let revString = [];
  for (let i = string.length; i >= 0; i--) {
    revString.push(string[i]);
  }
  stringDisplay.textContent = revString.join("");
}

//Factorial of a number
const numBtn = document.getElementById("numBtn");
numBtn.addEventListener("click", findFactorial);

function findFactorial() {
  const num = document.getElementById("num").value;
  const numberDisplay = document.getElementById("numberDisplay");
  if (num === "" || num === undefined || num === 0) {
    numberDisplay.textContent = `Please enter any number`;
  } else {
    numberDisplay.textContent = factorial(num);
  }
}

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//Palindrome
const paliBtn = document.getElementById("paliBtn");
paliBtn.addEventListener("click", isItPalindrome);

function isItPalindrome() {
  const pali = document.getElementById("pali").value;
  const palindromeDisplay = document.getElementById("palindromeDisplay");

  palindromeDisplay.textContent = palindrome(pali);
}

function palindrome(str) {
  if (str === "" || str === undefined) {
    return `Please enter any string`;
  } else {
    let revStr = Array.from(str);
    revStr.reverse();
    revStr = revStr.join("");
    if (str === revStr) {
      return `"${str}" is a palindrome`;
    } else {
      return `"${str}" is not a palindrome`;
    }
  }
}

//fibonacci

const fiboBtn = document.getElementById("fiboBtn");
fiboBtn.addEventListener("click", getFibonacci);

function getFibonacci() {
  const fiboNum = document.getElementById("fiboNum").value;
  const fibonacciDisplay = document.getElementById("fibonacciDisplay");
  if (fiboNum === "" || fiboNum === undefined || fiboNum === 0) {
    fibonacciDisplay.textContent = `Please enter any number`;
  } else {
    fibonacciDisplay.textContent = fibonacci(fiboNum);
  }
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
