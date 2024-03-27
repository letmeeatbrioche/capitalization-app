import { TransformedTextProps } from "@/types"

const Result = ({ transformedText }: TransformedTextProps) => {
  return (
    <div className="result overflow-auto text-[18px] bg-[#f2f8ff] border-2 border-black border-solid rounded-[23px] p-2.5 min-h-[90px] h-auto max-h-[423.2px]">
      {transformedText}
    </div>
  )
}

export default Result