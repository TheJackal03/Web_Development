const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const stopButton = document.querySelector('#stopButton')

let result = 0
let timerId = null
let isTimerRunning = false;
let hitPosition = null
let currentTime = 60


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitPosition) {
            if (isTimerRunning) {
                result++
                score.innerHTML = result
                hitPosition = null
                randomSquare()
            } else {
                alert("You're trying to outsmart me huh? The game is paused, therefore no hits will be accepted! You're lucky that I have stopped the timer as well!")
            }
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 700)
    isTimerRunning = true;
}

function stopMole() {
    if (isTimerRunning) {
        clearInterval(timerId);
        isTimerRunning = false
        clearInterval(countDownTimerId)
        stopButton.innerHTML = "Resume Mole"
    } else {
        stopButton.innerHTML = "Stop Mole"
        moveMole();
        countDownTimerId = setInterval(countDown, 1000)
    }
    
}


function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("You have run out of time! You whacked the mole " + result + " times!")
    }
}

let countDownTimerId = setInterval(countDown, 1000)



stopButton.addEventListener('click', stopMole);
moveMole();
