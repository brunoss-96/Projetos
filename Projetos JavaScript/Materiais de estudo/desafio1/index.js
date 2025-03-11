const textElement = document.getElementById("text");

let text = "desafio";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.innerHTML += text[index];
    index++;
    setTimeout(typeEffect, 200); 
  }
}

typeEffect();
