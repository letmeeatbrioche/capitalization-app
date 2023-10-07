"use client"

import React, { useState } from "react"
import { AllCapsOption, AllLowercaseOption, CapEveryOtherLetterOption, CapEveryWordOption, Result, SentenceCapsOption } from ".";
import { allLowerCase, allUpperCase, capEveryOtherFirst, capEveryWord, sentenceCap } from "utils";

// Component to take in text from user, take a way to transform the text,
//  and transform it respectively when the "submit" button is clicked.

const Form = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState('');
  const [transformed, setTransformed] = useState('');

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
    // console.log('form data:', textEntry);

    if (selected === 'All caps') {setTransformed(allUpperCase(text))}
    if (selected === 'All lowercase') {setTransformed(allLowerCase(text))}
    if (selected === 'Every other letter') {setTransformed(capEveryOtherFirst(text))}
    if (selected === 'Every word') {setTransformed(capEveryWord(text))}
    if (selected === 'Sentence caps') {setTransformed(sentenceCap(text))}

    // console.log('end of submit handler');
  }

  const handleOptionClick = (option: string) => {
    setSelected(option);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="userText" value={text} type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
        <AllCapsOption selectOption={() => handleOptionClick('All caps')} />
        <AllLowercaseOption selectOption={() => handleOptionClick('All lowercase')} />
        <CapEveryOtherLetterOption selectOption={() => handleOptionClick('Every other letter')} />
        <CapEveryWordOption selectOption={() => handleOptionClick('Every word')} />
        <SentenceCapsOption selectOption={() => handleOptionClick('Sentence caps')} />
      </form>

      <h2>Selected: {selected}</h2>

      <Result transformedText={transformed} />

    </div>
  )
}

export default Form
