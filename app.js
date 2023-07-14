const API_KEY = 'INPUT YOUR API KEY'
const submitButton = document.querySelector('#submit')
const outputDisplay = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyDisplay = document.querySelector('.history')
const newChat = document.querySelector('button')


function clearInput(value) {
    let tempInput = document.querySelector('input')
    tempInput.value = value
}


async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            max_tokens: 100,
            temperature: 0,
            top_p: 1,
            n: 1,
            stream: false,
            logprobs: null,
            stop: "\n",
            messages: [{role: "user", content: "Hello!"}]
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/completions', options)
        const data = await response.json()
        console.log(data)
        //this is the part where the data is being output. the data element includes a choices array that each element of the array "choices" has a message attribute/part where the message has a content part as well, where this content is the actual output we want to show on the screen
        outputDisplay.innerHTML = data.choices[0].message.content
        if (data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.innerHTML = inputElement.value
            pElement.addEventListener('click', () => changeInpput(pElement.innerHTML))
            historyDisplay.append(pElement)
        }

    } catch (error){
        console.error(error)

    }
}

submitButton.addEventListener('click', getMessage)

function clearInput() {
    inputElement.value = ''
}

newChat.addEventListener('click', clearInput)