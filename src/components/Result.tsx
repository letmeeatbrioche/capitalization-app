import { TransformedTextProps } from "@/types"

const Result = ({ transformedText }: TransformedTextProps) => {
  return (
    <div className="result">
      Result: {transformedText}
    </div>
  )
}

export default Result
