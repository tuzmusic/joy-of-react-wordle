import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";
import {HappyBanner, SadBanner} from "../Banners";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = React.useState('');

  const won = guesses.at(-1)?.every(({status}) => status === 'correct')
  const lost = !won && guesses.length === NUM_OF_GUESSES_ALLOWED

  function addGuess() {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      setGuesses(p => p.concat([checkGuess(currentGuess, answer)]))
    }
    setCurrentGuess('')
  }

  function addLetterToGuess(letter) {
    if (currentGuess.length < 5) {
      setCurrentGuess(p => p + letter)
    }
  }

  function restart() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setCurrentGuess('')
  }

  return (
    <>
      <Guesses guesses={guesses}/>
      <GuessInput
        addGuess={addGuess}
        disabled={won || lost}
        value={currentGuess}
        onChange={setCurrentGuess}
      />
      <Keyboard guesses={guesses} onKeyPress={addLetterToGuess}/>
      {won && <HappyBanner guessCount={guesses.length} restart={restart}/>}
      {lost && <SadBanner correctAnswer={answer} restart={restart}/>}
    </>
  )
}

export default Game;
