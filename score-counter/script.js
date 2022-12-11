"use strict";
const scoreCount = document.querySelector(".score-count");
const scoreAlert = document.querySelector(".alert");
const btnAdd = document.querySelector(".btn-add");
const btnReduce = document.querySelector(".btn-reduce");
const btnReset = document.querySelector(".btn-reset");

let score = 1;
let minScore = 0;
let maxScore = 10;

function addScore() {
  if (score <= maxScore) {
    scoreCount.textContent = score++;
    scoreAlert.textContent = "Continue clicking to reach the final score!";
  }

  if (score > maxScore) {
    score = maxScore;
    scoreAlert.textContent = "You have reached the final score!";
  }
}

function reduceScore() {
  scoreCount.textContent = score--;
  scoreAlert.textContent = "You are now decreasing the score...";

  if (score < minScore) {
    score = minScore;
    scoreAlert.textContent =
      "You have passed the minimum threshold. Increase the count to continue.";
  }
}

function resetScore() {
  score = "";
  scoreCount.textContent = "";
  scoreAlert.textContent = "";
}

btnAdd.addEventListener("click", addScore);
btnReduce.addEventListener("click", reduceScore);
btnReset.addEventListener("click", resetScore);
