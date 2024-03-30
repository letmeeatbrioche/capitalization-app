import { MouseEventHandler } from "react"

export interface AllCapsOptionProps {
  selectOption: MouseEventHandler<HTMLButtonElement>
}

export interface AllLowercaseOptionProps {
  selectOption: MouseEventHandler<HTMLButtonElement>
}

export interface CapEveryOtherLetterOptionProps {
  selectOption: MouseEventHandler<HTMLButtonElement>
}

export interface CapEveryWordOptionProps {
  selectOption: MouseEventHandler<HTMLButtonElement>
}

export interface SentenceCapsOptionProps {
  selectOption: MouseEventHandler<HTMLButtonElement>
}

export interface TransformedTextProps {
  transformedText: string,
  copyButtonText: string,
  setCopyButtonText: (value: string) => void
}