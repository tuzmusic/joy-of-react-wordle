import React from 'react';

export function HappyBanner({guessCount}) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in {" "}
      <strong>{guessCount} {guessCount === 1 ? 'guess' : 'guesses'}</strong>.
    </p>
  </div>
}

export function SadBanner({correctAnswer}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
    </div>
  );
}
