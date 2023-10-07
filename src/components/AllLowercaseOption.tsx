import { AllLowercaseOptionProps } from 'types'

const AllLowercaseOption = ({ selectOption }: AllLowercaseOptionProps) => {
  return (
    <button type='button' onClick={selectOption}>
      AllLowercaseOption
    </button>
  )
}

export default AllLowercaseOption
