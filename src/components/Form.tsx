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
  const [copyButtonText, setCopyButtonText] = useState('Copy Text');
  const disabledTransformStyles: CSSProperties = {
    backgroundColor: 'rgb(149, 167, 185)',
    color: 'rgb(242, 242, 242)',
    border: '2px solid rgb(115, 115, 115)'
  };
  const optionClasses = 'shrink-0 basis-auto cursor-pointer bg-[#F29021] hover:bg-[#ffffff] h-8 p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center';
  const specialOptionClasses = 'shrink-0 basis-auto cursor-pointer bg-[#F29021] hover:bg-[#ffffff] h-8 p-label-padding text-[17px] border-2 border-black border-solid rounded-[2rem] text-center justify-self-center order-1';

  // previous option color: #C7D3FF
  // mint color: #C1EDCC
  // bluey color: #55DDE0
  // previous transform color: #2B73B7

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
    // container shadow-container-shadow z-50 bg-[#d5e3f1] rounded-[20px] max-w-[980px] my-[40px] mx-auto h-[90vh] p-2.5
    <div className="h-screen w-screen">
      {/* <form className="shadow-container-shadow rounded-[20px] my-[10px] mx-auto w-11/12 form bg-[#d5e3f1] grid grid-cols-7 grid-rows-[3fr_3%_1fr_1fr] h-full p-2.5" onSubmit={handleSubmit}></form> */}
      <form className="h-screen max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] my-8 mx-auto form bg-[#FFC914] p-2.5" onSubmit={handleSubmit}>
        <textarea className="min-h-[113px] h-auto user-input font-arial-sans text-[18px] bg-[rgb(242, 248, 255)] border-2 border-black border-solid rounded-[23px] p-2.5 w-full" name="userText" placeholder="Add your text..." value={text} onChange={(event) => handleInputChange(event)} />

        <div className="options flex flex-wrap max-w-[664px] space-y-4  my-0 mx-auto ">
          <input className="shrink-0 basis-auto option hidden" type="radio" name="option" value="All caps" id="all-caps" onChange={() => handleOptionClick()}/>
          <label htmlFor="all-caps" className={optionClasses} >UPPERCASE</label>


          <input className="shrink-0 basis-auto option hidden" type="radio" name="option" value="All lowercase" id="lowercase" onChange={() => handleOptionClick()}/>
          <label className={optionClasses} htmlFor="lowercase">lowercase</label>



          <input className="shrink-0 basis-auto option hidden" type="radio" name="option" value="Every word" id="every-word" onChange={() => handleOptionClick()}/>
          <label className={optionClasses} htmlFor="every-word">Every Word</label>


          <input className="shrink-0 basis-auto option hidden" type="radio" name="option" value="Sentence caps" id="sentence" onChange={() => handleOptionClick()}/>
          <label htmlFor="sentence" className={optionClasses}>Sentence.</label>

          <div className="shrink-0 basis-auto special-option grid relative">
              <input className="option every-other-letter hidden" type="radio" name="option" value="Every other letter" id="every-other-letter" onChange={() => handleOptionClick('special')} />
              <label htmlFor="every-other-letter" className={specialOptionClasses}>Every other letter</label>

              <label className="checkbox-label relative -top-[5px] h-8 p-checkbox-padding text-[17px]  text-center justify-self-center order-2" htmlFor="checkbox" style={{cursor: everyOtherLetterSelected ? 'pointer' : undefined, backgroundColor: 'transparent', border: 'none'}}>
                <input className="checkbox" type="checkbox" name="first" id="checkbox" disabled={everyOtherLetterSelected ? false : true}  checked={checkboxActive} onClick={handleCheckboxClick} />
                Cap. the FIRST letter
              </label>
          </div>

        </div>

        <button className="mt-[5px] mb-[25px] w-full transform font-arial-sans bg-[#3777FF] border-2 border-black border-solid rounded-[96px] col-[4_/_span_1] h-[75px] row-start-4 self-center text-[17.5px] text-white font-semibold uppercase justify-self-center" type="submit" onClick={() => setCopyButtonText('Copy Text')} disabled={selected ? false : true} style={!selected ? disabledTransformStyles : undefined}>Transform</button>

        <Result transformedText={transformed} copyButtonText={copyButtonText} setCopyButtonText={setCopyButtonText} />

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