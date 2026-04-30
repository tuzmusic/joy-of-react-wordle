import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";
import {HappyBanner, SadBanner} from "../Banners";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [guesses, setGuesses] = useState([]);

  const won = guesses.at(-1)?.every(({status}) => status === 'correct')
  const lost = !won && guesses.length === NUM_OF_GUESSES_ALLOWED

  function addGuess(guess) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      setGuesses(p => p.concat([checkGuess(guess, answer)]))
    }
  }

  return (
    <div>
      <Guesses guesses={guesses}/>
      <GuessInput addGuess={addGuess} disabled={won || lost}/>
      <Keyboard guesses={guesses}/>
      {won && <HappyBanner guessCount={guesses.length}/>}
      {lost && <SadBanner correctAnswer={answer}/>}
    </div>
  )
}

export default Game;
