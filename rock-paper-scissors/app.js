const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(
    'click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    }
))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 0) {
        computerChoice = 'Rock'
    } else if (randomNumber === 1) {
        computerChoice = 'Scissors'
    } else {
        computerChoice = 'Paper'
    }
    console.log(computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === 'Rock' && userChoice == "Paper") {
        result = "You lost!"
    } else if (computerChoice === 'Paper' && userChoice == 'Scissors') {
        result = 'You lost!'
    } else if (computerChoice === 'Scissors' && userChoice == 'Rock') {
        result = 'You lost!'
    } else {
        result = 'You won!'
    }
    resultDisplay.innerHTML = result
}