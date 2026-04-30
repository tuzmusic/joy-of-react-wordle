import React from 'react';
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Guess({guess}) {
  return <p className="guess">
    {range(0, 5).map(i => {
        const spot = guess?.[i];
        return <span key={i} className={`cell ${spot?.status ?? ''}`}>{guess ? spot?.letter : ''}</span>;
      }
    )}
  </p>;
}

function Guesses({guesses}) {
  return <div className='guess-results'>
    {range(0, NUM_OF_GUESSES_ALLOWED).map((rowInd) => {
      const guess = guesses[rowInd]
      return (
        <Guess key={rowInd} guess={guess}/>
      );
    })}
  </div>;
}

export default Guesses;
