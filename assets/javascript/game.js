// Initialize and assign needed object variables
const resetButton = document.querySelector("#reset-button");
const shootButtonOne = document.querySelector("#teamone-shoot-button");
const shootButtonTwo = document.querySelector("#teamtwo-shoot-button");

let numShotsOne = document.querySelector("#teamone-numshots");
let numGoalsOne = document.querySelector("#teamone-numgoals");

let numShotsTwo = document.querySelector("#teamtwo-numshots");
let numGoalsTwo = document.querySelector("#teamtwo-numgoals");

const teamOneName = document.querySelector("#teamOne");
const teamTwoName = document.querySelector("#teamTwo");

// Ask user for team names and assign to object variables and check
// for valid user inputs
teamOneName.textContent = prompt("What is the name of Team One?");
while (teamOneName.textContent == "")
    teamOneName.textContent = prompt("Hey! Enter a valid name for Team One!!!");

teamTwoName.textContent = prompt("What is the name of Team Two?");
while (teamTwoName.textContent == "")
    teamTwoName.textContent = prompt("Hey! Enter a valid name for Team Two!!!");

// Add reset click event; will reset both teams' shots taken and goals
resetButton.addEventListener("click", function() {
    numShotsOne.innerHTML = 0;
    numShotsTwo.innerHTML = 0;
    numGoalsOne.innerHTML = 0;
    numGoalsTwo.innerHTML = 0;
})

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonOne.addEventListener("click", function() {
    // Increase shots taken value by one
    numShotsOne.innerHTML++;
    // Create a variable to be compared with a random number. This value will
    // essentially serve as field goal percentage * 100. If the random number is higher
    // than our coded field goal percentage, then the shot will miss.
    const fieldGoalRate = 60;
    let random = Math.floor(Math.random() * 100);
    console.log(random);

    if (fieldGoalRate >= random) {
        numGoalsOne.innerHTML++;
        alert("The " + teamOneName.textContent + " have scored!");
    }
})

// Add shoot click event; will succeed or fail based % chance compared to random number
shootButtonTwo.addEventListener("click", function() {
    // Increase shots taken value by one
    numShotsTwo.innerHTML++;
    // Create a variable to be compared with a random number. This value will
    // essentially serve as field goal percentage * 100. If the random number is higher
    // than our coded field goal percentage, then the shot will miss.
    const fieldGoalRate = 60;
    let random = Math.floor(Math.random() * 100);
    console.log(random);

    if (fieldGoalRate >= random) {
        numGoalsTwo.innerHTML++;
        alert("The " + teamTwoName.textContent + " have scored!");
    }
})