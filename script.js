const startButton = document.querySelector("button");
const main = document.querySelector("main");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");
const overlay = document.querySelector("#overlay");
const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let score = 0;
let interval;

let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

let randomBox = () => {
  main.append(box);
  box.style.backgroundColor = randomColor();

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  let xV = Math.floor(Math.random() * mainH);
  let yV = Math.floor(Math.random() * mainW);
  box.style.top = `${xV}px`;
  box.style.left = `${yV}px`;
};

startButton.addEventListener("click", () => {
  randomBox();

  clearInterval(interval);

  interval = setInterval(() => {
    randomBox();
    time += 1;
    timer.textContent = time;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = "flex";
  }, 10000);
});

box.addEventListener("click", () => {
  score += 1;
  scoree.textContent = score;
});
