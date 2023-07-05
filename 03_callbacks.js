// understand callback

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// myFunc() ya koi fun ka naam ya fir yh arrow function ya normal function bhi as callback 
// chla jayega and call ho jayega
// myFunc(() => {
//   console.log("function is doing task 2");
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

function onFail() {
  console.log("Wrong data type");
  console.log("please pass numbers only");
}
getTwoNumbersAndAdd(4, 4, addTwoNumbers, onFail);
