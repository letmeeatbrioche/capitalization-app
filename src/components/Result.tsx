import { TransformedTextProps } from "@/types"

const Result = ({ transformedText }: TransformedTextProps) => {
  return (
    <div className="result">
      {transformedText}
    </div>
  )
}

export default Result
