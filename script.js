const numEl = document.querySelector(".number");
let btnEl = document.querySelector(".button");
let count = 0;

function clicked() {
  count++;
  numEl.textContent = count;
}

btnEl.addEventListener("click", clicked);
