// -------------------------------VARIABLES-------------------------------------

// Initialize and assign needed object variables
const resetButton = document.querySelector("#reset-button");
const shootButtonOne = document.querySelector("#teamone-shoot-button");
const shootButtonTwo = document.querySelector("#teamtwo-shoot-button");

let numShotsOne = document.querySelector("#teamone-numshots");
let numGoalsOne = document.querySelector("#teamone-numgoals");
const resetSpan = document.querySelector("#numResetSpan");
let numResets = document.querySelector("#num-resets");

const inputs = document.querySelector("#inputs");

let numShotsTwo = document.querySelector("#teamtwo-numshots");
let numGoalsTwo = document.querySelector("#teamtwo-numgoals");

const teamOneName = document.querySelector("#teamOne");
const teamTwoName = document.querySelector("#teamTwo");

const swishSound = document.querySelector("#swish");
const brickSound = document.querySelector("#brick");

const leftDiv = document.querySelector("#left");
const rightDiv = document.querySelector("#right");

let gameTitle = document.querySelector("#game-title");
let winner = document.querySelector("#winner");

// Game variables
const fieldGoalRate = 60;
let running = true;

// Will always give the "visitors" possession first
leftDiv.classList.add("possessionIndicator");

// ---------------------------EVENT LISTENERS -------------------------------------------

// Add reset click event; will reset both teams' shots taken and goals
resetButton.addEventListener("click", function () {
  if (resetButton.textContent == "RESET") {
    reset();
    toggleTeamDivs();
    numResets.innerHTML++;
  } else if (resetButton.innerHTML == "PLAY") {
    // Grab team names from user input fields
    let teamOneInput = document.querySelector("#teamOneInput");
    let teamTwoInput = document.querySelector("#teamTwoInput");
    // Assign the text content of the team name elements to the value of the inputs
    if (teamOneInput.value === "") teamOneName.textContent = "Visitors";
    else teamOneName.textContent = teamOneInput.value;
    if (teamTwoInput.value === "") teamTwoName.textContent = "Home";
    else teamTwoName.textContent = teamTwoInput.value;
    // 'Play' button now becomes a 'Reset' button
    resetButton.textContent = "RESET";
    // hide the input elements and unhide the left and right elements
    inputs.classList.add("hide");
    toggleTeamDivs();
  } else {
    winner.classList.add("hide");
    gameTitle.classList.remove("hide");
    reset();
    resetSpan.classList.add("hide");
  }
});

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonOne.addEventListener("click", function () {
  // check to make sure its the team's turn
  if (leftDiv.classList.contains("possessionIndicator") && running) {
    // Increase shots taken value by one
    numShotsOne.innerHTML++;
    // Create a variable to be compared with a random number. This value will
    // essentially serve as field goal percentage * 100. If the random number is higher
    // than our coded field goal percentage, then the shot will miss.
    let random = generateRandomNumber(100);
    console.log(random);

    // Shoot!!!
    if (fieldGoalRate >= random) {
      numGoalsOne.innerHTML++;
      playSwish();
    } else playBrick();

    // Chekc to see if game is over
    if (Number(numGoalsOne.innerHTML) === 10) {
      gameOver();
      winner.innerHTML = `${teamOneName.textContent} has won the game!`;
    } else changePossession();
  } else alert("Hey! It's not your turn!");
});

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonTwo.addEventListener("click", function () {
  if (rightDiv.classList.contains("possessionIndicator") && running) {
    // Increase shots taken value by one
    numShotsTwo.innerHTML++;
    // Create a variable to be compared with a random number. This value will
    // essentially serve as field goal percentage * 100. If the random number is higher
    // than our coded field goal percentage, then the shot will miss.
    let random = generateRandomNumber(100);
    console.log(random);

    // Shoot!!!
    if (fieldGoalRate >= random) {
      numGoalsTwo.innerHTML++;
      playSwish();
    } else playBrick();

    // Check to see if the game is over
    if (Number(numGoalsTwo.innerHTML) === 10) {
      gameOver();
      winner.innerHTML = `${teamTwoName.textContent} won the game!`;
    } else changePossession();
  } else alert("Hey! It's not your turn!");
});

// --------------------------FUNCTIONS-----------------------------------------

// reset game defaults
function reset() {
  resetButton.innerHTML = "RESET";
  winner.classList.add("hide");
  numShotsOne.innerHTML = 0;
  numShotsTwo.innerHTML = 0;
  numGoalsOne.innerHTML = 0;
  numGoalsTwo.innerHTML = 0;
  resetSpan.classList.remove("hide");
  leftDiv.classList.add("possessionIndicator");
  rightDiv.classList.remove("possessionIndicator");
  toggleTeamDivs();
  running = true;
}

// stops running the game and shows the winning team
function gameOver() {
  running = false;
  gameTitle.classList.add("hide");
  winner.classList.remove("hide");
  resetSpan.classList.add("hide");
  resetButton.innerHTML = "PLAY AGAIN";
  toggleTeamDivs();
}

// toggles the possession indicator class
function changePossession() {
  leftDiv.classList.toggle("possessionIndicator");
  rightDiv.classList.toggle("possessionIndicator");
}

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

// Switches possession of the "ball"
function toggleTeamDivs() {
  leftDiv.classList.toggle("hide");
  rightDiv.classList.toggle("hide");
}
