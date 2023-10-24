"use client"

import React, { useState } from "react"
import { Result } from ".";
import { allLowerCase, allUpperCase, capEveryOtherFirst, capEveryOtherSecond, capEveryWord, sentenceCap } from "@/utils";

const Form = () => {
  const [text, setText] = useState('');
  const [checkboxActive, setCheckboxActive] = useState<boolean | undefined>(undefined);
  const [selected, setSelected] = useState(false);
  const [transformed, setTransformed] = useState('');
  const [everyOtherLetterSelected, setEveryOtherLetterSelected] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    // console.log('form data:', formData);
    // console.log('option:', formData.option);

    if (formData.option === 'All caps') {
      setTransformed(allUpperCase(text));
    } else if (formData.option === 'All lowercase') {
      setTransformed(allLowerCase(text));
    } else if (formData.option === 'Every word') {
      setTransformed(capEveryWord(text));
    } else if (formData.option === 'Sentence caps') {
      setTransformed(sentenceCap(text));
    } else if (data.has('second')) {
      setTransformed(capEveryOtherSecond(text));
    } else {
      setTransformed(capEveryOtherFirst(text));
    }
  }

  const handleOptionClick = (option?: string) => {
    setSelected(true);
    if (option) {
      setEveryOtherLetterSelected(true);
    } else {
      setEveryOtherLetterSelected(false);
    }
  }

  const handleCheckboxClick = () => {
    setCheckboxActive(!checkboxActive);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="userText" value={text} type="text" style={{width: 250}} onChange={handleInputChange} />

        <button type="submit" disabled={selected ? false : true}>Transform</button>

        <label>
          <input type="radio" name="option" value="All caps" onChange={() => handleOptionClick()}/>
          All caps
        </label>

        <label>
          <input type="radio" name="option" value="All lowercase" onChange={() => handleOptionClick()}/>
          All lowercase
        </label>

        <label>
          <input type="radio" name="option" value="Every other letter" onChange={() => handleOptionClick('everyOther')} />
          Cap every other letter
        </label>
        <label>
          <input type="checkbox" name="second" disabled={everyOtherLetterSelected ? false : true} onClick={handleCheckboxClick} />
          Cap the SECOND letter
        </label>

        <label>
          <input type="radio" name="option" value="Every word" onChange={() => handleOptionClick()}/>
          Cap every word
        </label>

        <label>
          <input type="radio" name="option" value="Sentence caps" onChange={() => handleOptionClick()}/>
          Sentence caps
        </label>

        {/* <AllCapsOption selectOption={() => handleOptionClick('All caps')} /> */}
        {/* <AllLowercaseOption selectOption={() => handleOptionClick('All lowercase')} /> */}
        {/* <CapEveryOtherLetterOption selectOption={() => handleOptionClick('Every other FIRST letter')} /> */}
        {/* <CapEveryOtherFirstLetter selectOption={() => handleOptionClick('Every other SECOND letter')} /> */}
        {/* <CapEveryWordOption selectOption={() => handleOptionClick('Every word')} /> */}
        {/* <SentenceCapsOption selectOption={() => handleOptionClick('Sentence caps')} /> */}
      </form>

      <Result transformedText={transformed} />

    </div>
  )
}

export default Form
