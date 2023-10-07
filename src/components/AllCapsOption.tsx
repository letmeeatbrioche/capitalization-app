import { AllCapsOptionProps } from 'types'

const AllCapsOption = ({ selectOption }: AllCapsOptionProps) => {
  return (
    <button type='button' onClick={selectOption}>
      AllCapsOption
    </button>
  )
}

export default AllCapsOption
