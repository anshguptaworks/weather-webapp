import { IconsType } from '../../assets/types'

export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary'
}

export enum ButtonSize {
  Medium = 'Medium',
  Large = 'Large'
}

export interface ButtonProps {
  children?: React.ReactNode
  isFullWidth?: boolean
  icon?: IconsType
  variant?: ButtonVariant
  disabled?: boolean
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  size?: ButtonSize
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  className?: string
  iconClass?: string
}

export interface RestButtonConfig {
  isFullWidth: ButtonProps['isFullWidth']
  icon: ButtonProps['icon']
}

export interface ButtonConfig {
  background: string
  border: string
  hover: string
  text: string
  disabled: string
  focus: string
  icon: string
  disabledIcon: string
}
