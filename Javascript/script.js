"use strict";
// Outputs
const total = document.querySelector(".total");
const billOut = document.querySelector(".Billout");
const tipOut = document.querySelector(".Tipout");

// Calculating the total payment
let totalPay;
let tipPercentage;
const calcTotal = function (a, b) {
  tipPercentage = 1 + b / 100;
  totalPay = a * tipPercentage;
  return totalPay;
};

// Clicking Calculate
document.querySelector(".btn").addEventListener("click", function () {
  let answer;
  //If tip is more than 100%
  if (Number(document.querySelector(".tipinput").value) > 100) {
    alert("!!!!!Tip needs to be equal to or less than 100..");
    //Calculating total using function made in line 10
  } else {
    answer = calcTotal(
      Number(document.querySelector(".billinput").value),
      Number(document.querySelector(".tipinput").value)
    );
    //Total
    total.textContent = `$${Math.trunc(answer)}`;
    //Bill
    billOut.textContent = `Bill: $${
      document.querySelector(".billinput").value
    }`;
    //Tip
    tipOut.textContent = `Tip: ${Math.trunc(
      answer - Number(document.querySelector(".billinput").value)
    )}`;
  }
});
