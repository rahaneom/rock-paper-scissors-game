let user = 0;
let comp = 0;
let allChoices = document.querySelectorAll(".choice");
let userChoiceLabel = document.querySelector("#userChoice");
let compChoiceLabel = document.querySelector("#compChoice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let resetBtn = document.querySelector("#resetBtn");

const compChoiceFunction = (userChoice) => {
  const choiceArray = ["Rock", "Scissor", "Paper"];
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choiceArray[randomIndex];

  userChoiceLabel.innerText = userChoice;
  compChoiceLabel.innerText = compChoice;

  let res = gameResult(userChoice, compChoice);
  gameScore(res);
};

const gameResult = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    msg.innerText = "Draw!";
    userChoiceLabel.style.backgroundColor = "rgb(199, 199, 255)";
    compChoiceLabel.style.backgroundColor = "rgb(199, 199, 255)";
    msg.style.backgroundColor = "rgb(23, 23, 57)";
  } else {
    let userWin = true;
    if (userChoice == "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice == "Paper") {
      userWin = compChoice === "Rock" ? true : false;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    return userWin;
  }
};

const gameScore = (res) => {
  if (res == true) {
    user++;
    userScore.innerText = user;
    userChoiceLabel.style.backgroundColor = "rgb(42, 167, 88)";
    compChoiceLabel.style.backgroundColor = "rgb(231, 80, 88)";
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "rgb(1, 95, 32)";
  } else if (res == false) {
    comp++;
    compScore.innerText = comp;
    compChoiceLabel.style.backgroundColor = "rgb(42, 167, 88)";
    userChoiceLabel.style.backgroundColor = "rgb(231, 80, 88)";
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "rgb(222, 1, 1)";
  }
};

allChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let temp = choice.getAttribute("id");
    let userChoice = temp.charAt(0).toUpperCase() + temp.slice(1);
    userChoiceLabel.style.backgroundColor = "transparent";
    compChoiceLabel.style.backgroundColor = "transparent";
    compChoiceFunction(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  user = 0;
  comp = 0;
  userScore.innerText = "0";
  compScore.innerText = "0";
  userChoiceLabel.innerText = "";
  compChoiceLabel.innerText = "";
  msg.innerText = "Game Reset! Start Over!";
  msg.style.backgroundColor = "rgb(23, 23, 57)";
  userChoiceLabel.style.backgroundColor = "transparent";
  compChoiceLabel.style.backgroundColor = "transparent";
});
