const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const resultsElement = document.getElementById('results')
const playAgainButton = document.createElement('button')
let correctWords = 0;

playAgainButton.innerText = 'Play again'
playAgainButton.onclick = startGame

quoteInputElement.addEventListener('input', () => {
    const wordCount = quoteInputElement.value.split(' ').length    
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    
    let correct = true
    
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        
        if (character == null ) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })

    if (correct) {
        quoteInputElement.disabled=true;
        correctWords += wordCount;
        console.log(correctWords)
        renderNewQuote()

    }
})


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null    
    quoteInputElement.disabled=false;
    quoteInputElement.focus()
}

async function startTimer() {
    let timeLeft = 60;
    
    function tick() {
        timerElement.innerText = timeLeft;
        if (timeLeft > 0) {
            timeLeft -= 1;
            setTimeout(tick, 1000)
        } else {
            endGame();
        }
    }
    tick();    
}

function endGame() {    
    quoteInputElement.disabled=true;
    let currentWordsComplete = 0;
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')

    arrayQuote.forEach((characterSpan) => {
        if (characterSpan.classList == 'correct' && characterSpan.innerText == ' ') {
            currentWordsComplete += 1;
        }
    })

    resultsElement.innerText = `Congratulations! You type at ${correctWords + currentWordsComplete} words per minute! \n \n`
    resultsElement.appendChild(playAgainButton);   
}

function startGame() {
    resultsElement.innerText = ''
    renderNewQuote()
    startTimer()    
}

startGame()