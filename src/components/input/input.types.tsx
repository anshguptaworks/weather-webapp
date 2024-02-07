import { IconsType } from '../../../src/assets/types'

export interface RestInputConfig {
  isFullWidth: InputProps['isFullWidth']
  icon: InputProps['icon']
}

export type InputType = 'text' | 'number' | 'password' | 'email' | 'tel' | 'date'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  isFullWidth?: boolean
  icon?: IconsType
  label?: string
  className?: string
  type?: InputType
  autoFocus?: boolean
  style?: React.CSSProperties
  inputClassName?: string
  value?: string
  disabled?: boolean
  ref?: React.LegacyRef<HTMLInputElement>
  helperText?: string
}
