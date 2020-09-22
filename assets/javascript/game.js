// Initialize and assign needed object variables
const resetButton = document.querySelector("#reset-button");
const shootButtonOne = document.querySelector("#teamone-shoot-button");
const shootButtonTwo = document.querySelector("#teamtwo-shoot-button");

let numShotsOne = document.querySelector("#teamone-numshots");
let numGoalsOne = document.querySelector("#teamone-numgoals");
const resetSpan = document.querySelector("#numResetSpan");
let numResets = document.querySelector("#num-resets");

let numShotsTwo = document.querySelector("#teamtwo-numshots");
let numGoalsTwo = document.querySelector("#teamtwo-numgoals");

const teamOneName = document.querySelector("#teamOne");
const teamTwoName = document.querySelector("#teamTwo");

const swishSound = document.querySelector("#swish");
const brickSound = document.querySelector("#brick");

const leftDiv = document.querySelector("#left");
const rightDiv = document.querySelector("#right");

const fieldGoalRate = 60;

// Ask user for team names and assign to object variables and check
// // for valid user inputs
teamOneName.textContent = prompt("What is the name of Team One?");
while (teamOneName.textContent == "")
  teamOneName.textContent = prompt("Hey! Enter a valid name for Team One!!!");

teamTwoName.textContent = prompt("What is the name of Team Two?");
while (teamTwoName.textContent == "")
  teamTwoName.textContent = prompt("Hey! Enter a valid name for Team Two!!!");

leftDiv.classList.toggle("possessionIndicator");

// Add reset click event; will reset both teams' shots taken and goals
resetButton.addEventListener("click", function () {
  console.log(typeof parseInt(numGoalsOne.innerHTML));

  if (parseInt(numGoalsOne.innerHTML, 10) > parseInt(numGoalsTwo.innerHTML, 10))
    alert(`The ${teamOneName.textContent} have won the game!`);
  else if (parseInt(numGoalsTwo.innerHTML) > parseInt(numGoalsOne.innerHTML))
    alert(`The ${teamTwoName.textContent} have won the game!`);
  // why is this else not working??
  else "The two teams have tied.";

  numShotsOne.innerHTML = 0;
  numShotsTwo.innerHTML = 0;
  numGoalsOne.innerHTML = 0;
  numGoalsTwo.innerHTML = 0;
  resetSpan.classList.remove("hide");
  numResets.innerHTML++;
});

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonOne.addEventListener("click", function () {
  // Increase shots taken value by one
  numShotsOne.innerHTML++;
  // Create a variable to be compared with a random number. This value will
  // essentially serve as field goal percentage * 100. If the random number is higher
  // than our coded field goal percentage, then the shot will miss.
  let random = generateRandomNumber(100);
  console.log(random);

  if (fieldGoalRate >= random) {
    numGoalsOne.innerHTML++;
    playSwish();
  } else playBrick();

  leftDiv.classList.toggle("possessionIndicator");
  leftDiv.classList.toggle("test");
  rightDiv.classList.toggle("possessionIndicator");
});

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonTwo.addEventListener("click", function () {
  // Increase shots taken value by one
  numShotsTwo.innerHTML++;
  // Create a variable to be compared with a random number. This value will
  // essentially serve as field goal percentage * 100. If the random number is higher
  // than our coded field goal percentage, then the shot will miss.
  let random = generateRandomNumber(100);
  console.log(random);

  if (fieldGoalRate >= random) {
    numGoalsTwo.innerHTML++;
    playSwish();
  } else playBrick();

  leftDiv.classList.toggle("possessionIndicator");
  rightDiv.classList.toggle("possessionIndicator");
});

// Create a play functions which will play either "swish" or "brick"
// if the team scores or not
function playSwish() {
  swishSound.play();
}

function playBrick() {
  brickSound.play();
}

// Function will create a random number, which will be compared to the
// variable field goal rate
function generateRandomNumber(max) {
  let number = Math.floor(Math.random() * max) + 1;
  return number;
}
