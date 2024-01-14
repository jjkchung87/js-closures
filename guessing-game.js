function guessingGame() {
    let randomNumber = Math.floor(Math.random()*100)
    let win = false;
    let guessesCount = 0;

    return function(guess){
        if(!win){
            if(guess < randomNumber){
                guessesCount++;
                return `${guess} is too low!`
            }
            else if(guess > randomNumber){
                guessesCount++;
                return `${guess} is too high!`
            }
            else {
                win = true;
                guessesCount++;
                return `You win! You found ${randomNumber} in ${guessesCount} guesses.`
            }
        }

        return "The game is over, you already won!"
        
    }

}

module.exports = { guessingGame };
