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
    <div className="container shadow-container-shadow z-50 bg-[#d5e3f1] rounded-[20px] max-w-[980px] my-[40px] mx-auto h-[90vh] p-2.5">
      <form className="form bg-[#d5e3f1] grid grid-cols-7 grid-rows-[3fr_3%_1fr_1fr] h-full w-full" onSubmit={handleSubmit}>
        <textarea className="user-input font-arial-sans text-[18px] bg-[rgb(242, 248, 255)] border-2 border-black border-solid rounded-[23px] col-[1_/_span_3] w-[105%] p-2.5" name="userText" value={text} onChange={(event) => handleInputChange(event)} />

        <Result transformedText={transformed} />

        <div className="options flex w-full col-[1_/_span_7] row-start-3">
          <input className="option hidden" type="radio" name="option" value="All caps" id="all-caps" onChange={() => handleOptionClick()}/>
          <label htmlFor="all-caps" className="cursor-pointer bg-[#deefff] hover:bg-[#e2ecf6] h-8 w-[200px] p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" >ALL CAPS</label>


          <input className="option hidden" type="radio" name="option" value="All lowercase" id="lowercase" onChange={() => handleOptionClick()}/>
          <label className="down-btn self-end cursor-pointer bg-[#deefff] hover:bg-[#e2ecf6] h-8 w-[200px] p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" htmlFor="lowercase">lowercase</label>

          <div className="special-option top-[50px] grid col-[4_/_span_1] justify-self-center">
              <input className="option every-other-letter hidden" type="radio" name="option" value="Every other letter" id="every-other-letter" onChange={() => handleOptionClick('special')} />
              <label htmlFor="every-other-letter" className="cursor-pointer bg-[#deefff] hover:bg-[#e2ecf6] h-8 w-[200px] p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center order-1">Every other letter</label>

              <label className="checkbox-label relative -top-[25px] h-8  p-checkbox-padding text-[17px] rounded-[2rem] text-center justify-self-center order-2" htmlFor="checkbox" style={{cursor: everyOtherLetterSelected ? 'pointer' : undefined, backgroundColor: checkboxActive ? '#c7d3ff' : 'transparent', border: checkboxActive ? 'solid 2px black': 'none'}}>
                <input className="checkbox" type="checkbox" name="first" id="checkbox" disabled={everyOtherLetterSelected ? false : true}  checked={checkboxActive} onClick={handleCheckboxClick} />
                Cap. the FIRST letter
              </label>
          </div>



          <input className="option hidden" type="radio" name="option" value="Every word" id="every-word" onChange={() => handleOptionClick()}/>
          <label className="down-btn self-end cursor-pointer bg-[#deefff] hover:bg-[#e2ecf6] h-8 w-[200px] p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center" htmlFor="every-word">Every Word</label>


          <input className="option hidden" type="radio" name="option" value="Sentence caps" id="sentence" onChange={() => handleOptionClick()}/>
          <label htmlFor="sentence" className="cursor-pointer bg-[#deefff] hover:bg-[#e2ecf6] h-8 w-[200px] p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center">Sentence caps</label>
        </div>

        <button className="transform font-arial-sans bg-[#2b73b7] border-2 border-black border-solid rounded-[96px] col-[4_/_span_1] w-[300px] h-[75px] row-start-4 self-center text-[17.5px] text-white font-semibold uppercase justify-self-center" type="submit" disabled={selected ? false : true} style={!selected ? disabledTransformStyles : undefined}>Transform</button>

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