const numEl = document.querySelector(".number");
let btnEl = document.querySelector(".button");
let count = 0;

function clicked() {
  alert("clicked");
}
btnEl.addEventListener("click", clicked());
