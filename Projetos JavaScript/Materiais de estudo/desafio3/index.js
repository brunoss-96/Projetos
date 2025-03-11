function movie() {
  console.log("The Matrix");
}

movie();

const car = function () {
  console.log("Ferrari");
};

car();

/////////////////

function price(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(price(10, 20, 60, -10));

///////////////////

function carLoan(loan, rate, months) {
  return ((loan * rate) / 4) * months + loan;
}
console.log(carLoan(52000, 17.66, 48));

///////////////
