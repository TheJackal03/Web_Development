"use strict";

// console.log(document.querySelector('.message').textContent) // for class
// // document.querySelector('#smth') // for id

// // we can also manipulate the content of the message
// document.querySelector('.message').textContent = "🎉 Correct number"

// buttons
const button = document.querySelector('.btn.check')
const playAgain = document.querySelector('#playAgain')

// message
const message = document.querySelector('.message')
const displayValue = document.querySelector('.number')

// score
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')

// user input
const userInput = document.querySelector('.guess')

// random number
var numberToFind = Math.floor(Math.random() * 100) + 1

const findNumberEvent = button.addEventListener('click', () => {
    displayValue.textContent = parseInt(userInput.value)

    if (score.textContent == 0) {
        alert("You run out of tries!  ⛔️")
        message.textContent = "No tries left! ⛔️"
        document.body.style.backgroundColor = 'red';
    } else {
        if (!userInput.textContent) {
        message.textContent = "⛔️ No Number Detected! ⛔️"
        }

        if (displayValue.textContent > numberToFind) {
            message.textContent = "You need to go lower 😬 📉"
            score.textContent -= 1
        }
        else if (displayValue.textContent < numberToFind) {
            message.textContent = "You need to go higher 😳 📈"
            score.textContent -= 1
        }
        else if (displayValue.textContent == numberToFind) {
            message.textContent = `You found the number with Score: ${score.textContent} ✅ 👍🏻`
            if (parseInt(score.textContent) > parseInt(highscore.textContent)) {
                highscore.textContent = score.textContent
                document.body.style.backgroundColor = 'green';
            }
        }
    }
}
)


playAgain.addEventListener('click', () => {
    numberToFind = Math.floor(Math.random() * 100) + 1
    document.body.style.backgroundColor = '#222'
    displayValue.textContent = "?"
    message.textContent = "Start guessing..."
    userInput.value = ""
    score.textContent = "20"
    console.log(numberToFind)
}
)