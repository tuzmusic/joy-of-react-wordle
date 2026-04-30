import React from 'react';

/*

- [X] Create a new component.
- [X] This component should render a `<form>` tag, including a label and a text input.
- [X] The text input should be controlled by React state.
- [ ] When the form is submitted:
  - [X] The entered value should be logged to the console (for now).
  - [X] The input should be reset to an empty string.
- [X] **The user's input should be converted to ALL UPPERCASE.** No lower-case letters allowed.
- [X] The input should have a minimum and maximum length of 5.

*/

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function onSubmit(e) {
    e.preventDefault()
    addGuess(guess)
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={onSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={disabled}
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        id='guess-input'
        type='text'
        pattern="[a-zA-Z]{5}"
        name='guess-input'
      />
    </form>
  )
}

export default GuessInput;
