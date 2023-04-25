const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const responseParagraph = document.getElementById('response');
const guessCountParagraph = document.getElementById('guess-count');
const previousGuessesParagraph = document.getElementById('previous-guesses');

const previousGuesses = [];
let guessCount = 0;

const randomNumber = Math.floor(Math.random() * 100) + 1;

submitButton.onclick = function submitGuess() {
    const guess = guessInput.value;
    guessInput.value = '';

    guessCount++;
    
    if (guess == randomNumber) {
        responseParagraph.textContent = `Correct! The number is ${randomNumber}!`;
        guessCountParagraph.textContent = `It took you ${guessCount} guesses!`;
        return;
    }
    
    let hint;
    if (guess < randomNumber) {
        hint = 'low';
    } else {
        hint = 'high';
    }
    responseParagraph.textContent = `Wrong! ${guess} is too ${hint}.`;
    guessCountParagraph.textContent = `You have ${10 - guessCount} guesses left.`;
}