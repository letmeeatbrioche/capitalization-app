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

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    } else if (data.has('first')) {
      setTransformed(capEveryOtherFirst(text));
    } else {
      setTransformed(capEveryOtherSecond(text));
    }
  }

  const handleOptionClick = (option?: string) => {
    setSelected(true);
    if (option) {
      setEveryOtherLetterSelected(true)
      setCheckboxActive(!checkboxActive);
    } else {
      setEveryOtherLetterSelected(false);
      setCheckboxActive(false);
    }
  }


  const handleCheckboxClick = () => {
    setCheckboxActive(!checkboxActive);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <textarea className="user-input" name="userText" value={text} onChange={(event) => handleInputChange(event)} />

        <Result transformedText={transformed} />

        <div className="options">
          <input className="option" type="radio" name="option" value="All caps" id="all-caps" onChange={() => handleOptionClick()}/>
          <label htmlFor="all-caps" >All caps</label>


          <input className="option" type="radio" name="option" value="All lowercase" id="lowercase" onChange={() => handleOptionClick()}/>
          <label className="down-btn" htmlFor="lowercase">All lowercase</label>

          <div className="special-option">
              <input className="option every-other-letter" type="radio" name="option" value="Every other letter" id="every-other-letter" onChange={() => handleOptionClick('special')} />
              <label htmlFor="every-other-letter">Cap every other letter</label>

              <label className="checkbox-label" htmlFor="checkbox" style={{cursor: everyOtherLetterSelected ? 'pointer' : undefined}}>
                <input className="checkbox" type="checkbox" name="first" id="checkbox" disabled={everyOtherLetterSelected ? false : true}  checked={checkboxActive} onClick={handleCheckboxClick} />
                Cap the FIRST letter
              </label>
          </div>



          <input className="option" type="radio" name="option" value="Every word" id="every-word" onChange={() => handleOptionClick()}/>
          <label className="down-btn" htmlFor="every-word">Cap every word</label>


          <input className="option" type="radio" name="option" value="Sentence caps" id="sentence" onChange={() => handleOptionClick()}/>
          <label htmlFor="sentence">Sentence caps</label>
        </div>

        <button className="transform" type="submit" disabled={selected ? false : true}>Transform</button>

        {/* <AllCapsOption selectOption={() => handleOptionClick('All caps')} /> */}
        {/* <AllLowercaseOption selectOption={() => handleOptionClick('All lowercase')} /> */}
        {/* <CapEveryOtherLetterOption selectOption={() => handleOptionClick('Every other FIRST letter')} /> */}
        {/* <CapEveryOtherFirstLetter selectOption={() => handleOptionClick('Every other SECOND letter')} /> */}
        {/* <CapEveryWordOption selectOption={() => handleOptionClick('Every word')} /> */}
        {/* <SentenceCapsOption selectOption={() => handleOptionClick('Sentence caps')} /> */}
      </form>


    </div>
  )
}

export default Form