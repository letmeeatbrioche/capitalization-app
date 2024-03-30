import { TransformedTextProps } from "@/types"
import { useState } from "react";

const Result = ({ transformedText, copyButtonText, setCopyButtonText }: TransformedTextProps) => {
  async function selectText() {
    try {
      await navigator.clipboard.writeText(transformedText);
      setCopyButtonText('Text copied to clipboard!');
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div>
        <button className={`copy-button cursor-pointer bg-[#e4572e] text-white hover:bg-[#1B065E] h-8 p-label-padding text-[17px] border-2 border-black border-solid border-b-0 rounded-t-[2rem] text-center w-full`} onClick={selectText}>{copyButtonText}</button>
      </div>
      <div id="result" className="result overflow-auto text-[18px] bg-[#ffffff] border-2 border-black border-solid rounded-b-[23px] p-2.5 min-h-[100px] h-auto max-h-[423.2px]">
        {
          <p>{transformedText}</p>
          ||
          <p className="result text-stone-400">Result</p>
        }
      </div>
    </>
  )
}

export default Result
