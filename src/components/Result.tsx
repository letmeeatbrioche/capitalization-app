import { TransformedTextProps } from "types"

const Result = ({ transformedText }: TransformedTextProps) => {
  return (
    <h1>
      Result: {transformedText}
    </h1>
  )
}

export default Result
