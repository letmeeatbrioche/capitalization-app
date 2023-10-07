import { CapEveryOtherLetterOptionProps } from 'types'

const CapEveryOtherLetterOption = ({ selectOption }: CapEveryOtherLetterOptionProps) => {
  return (
    <button type='button' onClick={selectOption}>
      CapEveryOtherLetter
    </button>
  )
}

export default CapEveryOtherLetterOption
