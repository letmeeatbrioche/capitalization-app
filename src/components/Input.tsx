"use client"

import React, { useState } from "react"
import { AllCapsOption, AllLowercaseOption, CapEveryOtherLetterOption, CapEveryWordOption, SentenceCapsOption } from ".";

// Component to take in text from user, take a way to transform the text,
//  and transform it respectively when the "submit" button is clicked.

const Input = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSubmitted(false);
    setText(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setSubmitted(true);
    const form = event.target;
    const data = new FormData(form);
    const textEntry = Object.fromEntries(data.entries());
    console.log('form data:', textEntry);
  }

  const handleOptionClick = (option: string) => {
    setSelected(option);
  }

  return (
    <div>
      Input Component
      <form onSubmit={handleSubmit}>
        <input name="userText" value={text} type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
        <AllCapsOption selectOption={() => handleOptionClick('All caps')} />
        <AllLowercaseOption selectOption={() => handleOptionClick('All lowercase')} />
        <CapEveryOtherLetterOption selectOption={() => handleOptionClick('Every other letter')} />
        <CapEveryWordOption selectOption={() => handleOptionClick('Every word')} />
        <SentenceCapsOption selectOption={() => handleOptionClick('Sentence caps')} />
      </form>

      <h1>{text}</h1>

      <h2>Selected: {selected}</h2>
    </div>
  )
}

export default Input
