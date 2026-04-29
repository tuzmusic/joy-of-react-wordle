import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

let guessId = 0

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess) {
    setGuesses(p => p.concat({guess, id: guessId++}))
  }

  return (
    <div>
      <Guesses guesses={guesses}/>
      <GuessInput addGuess={addGuess}/>
    </div>
  )
}

export default Game;
