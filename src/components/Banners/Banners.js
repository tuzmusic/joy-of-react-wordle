import React from 'react';

export function HappyBanner({guessCount, restart}) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in {" "}
      <strong>{guessCount} {guessCount === 1 ? 'guess' : 'guesses'}</strong>.{" "}
      <button className='restart' onClick={restart}>Play again!</button>
    </p>
  </div>
}

export function SadBanner({correctAnswer, restart}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.{" "}
        <button className='restart' onClick={restart}>Play again!</button>
      </p>
    </div>
  );
}
