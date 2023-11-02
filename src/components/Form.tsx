"use client"
import React, { useState, CSSProperties } from "react"
import { Result } from ".";
import { allLowerCase, allUpperCase, capEveryOtherFirst, capEveryOtherSecond, capEveryWord, sentenceCap } from "@/utils";

const Form = () => {
  const [text, setText] = useState('');
  const [checkboxActive, setCheckboxActive] = useState<boolean | undefined>(undefined);
  const [selected, setSelected] = useState(false);
  const [transformed, setTransformed] = useState('');
  const [everyOtherLetterSelected, setEveryOtherLetterSelected] = useState(false);
  const disabledTransformStyles: CSSProperties = {
    backgroundColor: 'rgb(149, 167, 185)',
    color: 'rgb(242, 242, 242)',
    border: '2px solid rgb(115, 115, 115)'
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
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
    <div className="container z-50 bg-[rgb(213, 227, 241)] border-2 border-black border-solid rounded-[20px] max-w-[980px] my-[40px] mx-auto h-[90vh] p-2.5">
      <form className="form bg-[rgb(213, 227, 241)] border-2 border-black border-solid grid grid-cols-7 grid-rows-[3fr_3%_1fr_1fr] h-full w-full" onSubmit={handleSubmit}>
        <textarea className="user-input bg-[rgb(242, 248, 255)] border-2 border-black border-solid rounded-[23px] col-[1_/_span_3] w-[105%] p-2.5" name="userText" value={text} onChange={(event) => handleInputChange(event)} />

        <Result transformedText={transformed} />

        <div className="options border-2 border-black border-solid flex w-full col-[1_/_span_7] row-start-3">
          <input className="option hidden" type="radio" name="option" value="All caps" id="all-caps" onChange={() => handleOptionClick()}/>
          <label htmlFor="all-caps" className="bg-[#1d2d] h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" >ALL CAPS</label>


          <input className="option hidden" type="radio" name="option" value="All lowercase" id="lowercase" onChange={() => handleOptionClick()}/>
          <label className="down-btn self-end h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" htmlFor="lowercase">lowercase</label>

          <div className="special-option top-[50px] grid col-[4_/_span_1] justify-self-center">
              <input className="option every-other-letter hidden" type="radio" name="option" value="Every other letter" id="every-other-letter" onChange={() => handleOptionClick('special')} />
              <label htmlFor="every-other-letter" className="h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center order-1">Every other letter</label>

              <label className="checkbox-label relative -top-28 h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center order-2" htmlFor="checkbox" style={{cursor: everyOtherLetterSelected ? 'pointer' : undefined}}>
                <input className="checkbox" type="checkbox" name="first" id="checkbox" disabled={everyOtherLetterSelected ? false : true}  checked={checkboxActive} onClick={handleCheckboxClick} />
                Cap. the FIRST letter
              </label>
          </div>



          <input className="option hidden" type="radio" name="option" value="Every word" id="every-word" onChange={() => handleOptionClick()}/>
          <label className="down-btn self-end h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" htmlFor="every-word">Every Word</label>


          <input className="option hidden" type="radio" name="option" value="Sentence caps" id="sentence" onChange={() => handleOptionClick()}/>
          <label htmlFor="sentence" className="h-8 w-[200px] text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center">Sentence caps</label>
        </div>

        <button className="transform border-2 border-black border-solid rounded-[96px] col-[4_/_span_1] w-[300px] h-[75px] row-start-4 self-center text-[17.5px] uppercase justify-self-center" type="submit" disabled={selected ? false : true} style={!selected ? disabledTransformStyles : undefined}>Transform</button>

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