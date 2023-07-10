const number1 = document.querySelector('#num1')
const number2 = document.querySelector('#num2')
const resultDisplay = document.querySelector('.result')
const reset = document.querySelector('#clear')


function add() {
    let value1 = parseInt(number1.value)
    let value2 = parseInt(number2.value)
    const sum = value1 + value2
    console.log(parseInt(number1.value) + parseInt(number2.value))
    clearAll()

    if (isNaN(value1) || isNaN(value2)) {
        alert("Non-Acceptable Numbers Inputed")
    } else {
        resultDisplay.innerHTML = resultDisplay.innerHTML + sum
    }
}
function subtract() {
    let value1 = parseInt(number1.value)
    let value2 = parseInt(number2.value)
    const difference = value1 - value2
    clearAll()
    if (isNaN(value1) || isNaN(value2)) {
        alert("Non-Acceptable Numbers Inputed")
    } else {
        resultDisplay.innerHTML = resultDisplay.innerHTML + difference
    }}

function multiply() {
    let value1 = parseInt(number1.value)
    let value2 = parseInt(number2.value)
    const product = value1 * value2
    clearAll()
    if (isNaN(value1) || isNaN(value2)) {
        alert("Non-Acceptable Numbers Inputed")
    } else {
        resultDisplay.innerHTML = resultDisplay.innerHTML + product
    }}

function divide() {
    let value1 = parseInt(number1.value)
    let value2 = parseInt(number2.value)
    const quotient = value1 / value2
    clearAll()
    if (isNaN(value1) || isNaN(value2)) {
        alert("Non-Acceptable Numbers Inputed")
    } else {
        resultDisplay.innerHTML = resultDisplay.innerHTML + quotient
    }}

function clearAll() {
    resultDisplay.innerHTML = "Result: "
    number1.value = ""
    number2.value = ""
}

reset.addEventListener('click', clearAll)
