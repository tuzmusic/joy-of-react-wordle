import React from 'react';

function Guesses({guesses}) {
  return <div className='guess-results'>
    {guesses.map(({id, guess}) => (
      <p className='guess' key={id}>{guess}</p>
    ))}
  </div>;
}

export default Guesses;
