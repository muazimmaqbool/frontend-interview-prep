import React, { useState } from 'react'

/*
Question:
    Build a "Guess the Number" game where the user tries to guess a randomly generated number between 1
    and 100. The game provides feedback after each guess and tracks the number of attempts.

Requirements:
    1. Generate a Random Number
        . Random number between 1 and 100 (inclusive) is generated at the start of the game.

    2. User Input
        . User enters a guess between 1 and 100.
        . The input field must have an id="guess-input" for easy testing.

    3. Feedback After Each Guess
        . Correct Guess : "Congratulations! You guessed the number in X attempts."
        . Guess is less than Random number : "Too low! Try again."
        . Guess is greater than Random number: "Too high! Try again."
        . Invalid Input: "Please enter a number between 1 and 100."

    4. Track Attempts
        . Keep count of the number of guesses made.

    5. Buttons and Their Functions
        . A button labelled "Reset Game" starts a new game.
        . A button labeled "Check Guess" checks the current guess and give feedback

    Input/Output Example

        Input: 50
        Output: Too high! Try again.

        Input: 30
        Output: Too low! Try again.

        Input: 40
        Output: Congratulations! You guessed the number in 3 attempts.

        Input: 105
        Output: Please enter a number between 1 and 100.

        Input: apple
        Output: Please enter a number between 1 and 100.
*/
const P_Guess_Number = () => {
  
  const generateRandom = () => Math.floor(Math.random() * 100) + 1;

  const [numberToGuess, setNumberToGuess] = useState(generateRandom);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  
  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);
    if (num === numberToGuess) {
      setMessage(`Congratulations! You guessed the number in ${attempts+1} attempts.`)
    } else if (num < numberToGuess) {
      setMessage("Too low! Try again")
    } else {
      setMessage("Too high! Try again");     
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberToGuess(generateRandom())
    setGuess("")
    setMessage("");
    setAttempts(0)
  };
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        id="guess-input"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div style={{margin:"20px 0",display:"flex",alignItems:"center",justifyContent:"space-around",width:"300px"}}>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default P_Guess_Number