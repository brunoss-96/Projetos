let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxAttempts = 10;

function newGame() {
  window.location.reload();
}

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
}

function validateInput() {
  const inputBox = document.getElementById("inputBox");
  const userNumber = Number(inputBox.value);

  if (userNumber < 1) {
    inputBox.value = 1;
  } else if (userNumber > 100) {
    inputBox.value = 100;
  }
}

function compareNumbers() {
  if (attempts >= maxAttempts)
    return alert("ihhhhh Game over! O número era " + computerNumber);
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;

  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  if (userNumber > computerNumber + 3) {
    document.getElementById("textOutput").innerHTML = "Tá quente, queimando!";
    document.getElementById("inputBox").value = "";
  } else if (userNumber < computerNumber - 6) {
    document.getElementById("textOutput").innerHTML = "Tá frioooo!!!";
    document.getElementById("inputBox").value = "";
  } else if (
    userNumber >= computerNumber - 5 &&
    userNumber <= computerNumber + 5
  ) {
    document.getElementById("textOutput").innerHTML = "Tá morno!";
    document.getElementById("inputBox").value = "";
  } else {
    alert("Acerto Miserávi!!");
  }
}
