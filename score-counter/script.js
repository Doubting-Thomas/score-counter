"use strict";
const scoreCount = document.querySelector(".score-count");
const scoreAlert = document.querySelector(".alert");
const btnAdd = document.querySelector(".btn-add");
const btnReduce = document.querySelector(".btn-reduce");
const btnReset = document.querySelector(".btn-reset");
const body = document.querySelector("body");

let score = 1;
let minScore = 0;
let maxScore = 10;

function addScore() {
  if (score <= maxScore) {
    scoreCount.textContent = score++;
    scoreAlert.textContent = "Continue clicking to reach the final score!";
    body.style.backgroundColor = "";
  }

  if (score > maxScore) {
    score = maxScore;
    scoreAlert.textContent = "You have reached the final score!";
    body.style.backgroundColor = "#00ff87";
  }
}

function reduceScore() {
  scoreCount.textContent = score--;
  scoreAlert.textContent = "You are now decreasing the score...";
  body.style.backgroundColor = "";

  if (score < minScore) {
    score = minScore;
    scoreAlert.textContent =
      "You have passed the minimum threshold. Increase the count to continue.";
    body.style.backgroundColor = "#ff1b6b";
  }
}

function resetScore() {
  score = "";
  scoreCount.textContent = "";
  scoreAlert.textContent = "";
  body.style.backgroundColor = "";
}

btnAdd.addEventListener("click", addScore);
btnReduce.addEventListener("click", reduceScore);
btnReset.addEventListener("click", resetScore);
