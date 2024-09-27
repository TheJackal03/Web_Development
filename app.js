const sumDisplay = document.querySelector('#sum')
const cardsDisplay = document.querySelector('#cards')
const resultDisplay = document.querySelector('#roundMessage')
let counter = 0
let result = 0

function addCard() {
    counter++
    let card = Math.floor(Math.random() * (10)) + 1
    result = result + card

    if (counter == 1) {
        cardsDisplay.innerHTML = cardsDisplay.innerHTML + card
    } else if (counter > 1) {
        cardsDisplay.innerHTML = cardsDisplay.innerHTML + " + " + card
    }
}

function check() {
    let dealer = Math.floor(Math.random() * (31 - 11 + 1)) + 11

    if (result > 21) {
        sumDisplay.innerHTML = sumDisplay.innerHTML + result
        setTimeout(function() {
            resultDisplay.innerHTML = "You have " + result + " points! You have exceeded 21, so you lost the round!"
        }, 2000)
    } else if (result < 21) {
        sumDisplay.innerHTML = sumDisplay.innerHTML + result
        setTimeout(function() {
            resultDisplay.innerHTML = "You have " + result + " points! You're good to go"
        }, 2000)

        setTimeout(function() {
            if ((dealer > result) && (dealer <= 21)) {
                resultDisplay.innerHTML = "Dealer got " + dealer + " points. You lost the round!"
            } else if (dealer == result) {
                resultDisplay.innerHTML = "Dealer got " + dealer + " points too! The round ends as a Tie."
            } else if (dealer > 21) {
                resultDisplay.innerHTML = "Dealer got " + dealer + " points. She exceeded 21! You win the round!"
            } else {
                resultDisplay.innerHTML = "Dealer got " + dealer + " points. You beat her and you Won the Round!"
            }
        }, 4000)
    } else {
        // Update the content of sumDisplay
        sumDisplay.innerHTML = sumDisplay.innerHTML + result;

        // Delayed alert after 3 seconds
        setTimeout(function() {
        resultDisplay.innerHTML = "You got 21! You won the round!"
        }, 2000);
    }
}

function newGame() {
    sumDisplay.innerHTML = "Sum: "
    cardsDisplay.innerHTML = "Cards: "
    result = 0
    counter = 0
    resultDisplay.innerHTML = ""
}