import React from 'react';
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Guesses({guesses}) {
  return <div className='guess-results'>
    {range(0, NUM_OF_GUESSES_ALLOWED).map((rowInd) => {
      const guess = guesses[rowInd]
      return (
        <p className='guess' key={rowInd}>
          {range(0, 5).map(i => (
            <span className='cell'>{guess ? guess[i] : ''}</span>
          ))}
        </p>
      );
    })}
  </div>;
}

export default Guesses;
