import React from 'react';

const rows = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM'
].map(r => r.split(''))

function Keyboard({guesses, onKeyPress}) {
  const allGuessedLetters = guesses?.flat().flat().reduce((acc, {status, letter}) => {
    // if new status is correct, always overwrite
    if (status === 'correct') {
      acc[letter] = status
    }
    // if new status is misplaced, only overwrite incorrect
    if (status === 'misplaced' && acc[status] !== 'correct') {
      acc[letter] = status
    }
    // if new status is incorrect, only write if empty
    if (status === 'incorrect' && (acc[status] !== 'correct' || acc[status] !== 'misplaced')) {
      acc[letter] = status
    }
    return acc
  }, {})

  return (
    <div className='keyboard'>
      {rows.map((row, i) => (
        <div className='keyboard-row' key={i}>
          {row.map(key =>
            (
              <button
                key={key}
                className={`key cell ${allGuessedLetters[key] ?? ''}`}
                onClick={() => onKeyPress(key)}
              >
                {key}
              </button>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard;
