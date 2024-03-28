import { TransformedTextProps } from "@/types"

const Result = ({ transformedText }: TransformedTextProps) => {
  return (
    <div className="result overflow-auto text-[18px] bg-[#ffffff] border-2 border-black border-solid rounded-[23px] p-2.5 min-h-[100px] h-auto max-h-[423.2px]">
      {
        transformedText ||
        <p className="result text-stone-400">Result</p>
      }
    </div>
  )
}

export default Result