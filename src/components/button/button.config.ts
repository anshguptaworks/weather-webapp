import { ButtonConfig, ButtonSize, ButtonVariant } from './button.types'

const disabledClass = 'disabled:bg-gray-100 disabled:text-grey-500'
const disabledIconClass = 'stroke-grey-500'

export const baseClass = [
  'text-sm font-bold rounded-md flex items-center justify-center focus:outline-none transition-all duration-200 ease-in-out'
]

const primaryButtonConfig: ButtonConfig = {
  background: 'bg-primary',
  border: 'border-none',
  hover: 'hover:bg-primary50 hover:cursor-pointer',
  text: 'text-white',
  disabled: disabledClass,
  focus: '',
  icon: 'stroke-white',
  disabledIcon: disabledIconClass
}

const secondaryButtonConfig: ButtonConfig = {
  background: 'bg-secondary',
  border: 'border-none',
  hover: 'hover:bg-secondary50 hover:cursor-pointer',
  disabled: disabledClass,
  text: 'text-grey200',
  focus: '',
  icon: 'stroke-grey300',
  disabledIcon: disabledIconClass
}

export const tertiaryButtonConfig: ButtonConfig = {
  background: 'bg-transparent',
  border: 'border-none border-transparent',
  disabled: 'disabled:text-grey500',
  focus: 'outline-none',
  hover: 'hover:cursor-pointer',
  text: 'text-primary',
  icon: 'stroke-grey300',
  disabledIcon: disabledIconClass
}

export const variants = {
  [ButtonVariant.Primary]: primaryButtonConfig,
  [ButtonVariant.Secondary]: secondaryButtonConfig,
  [ButtonVariant.Tertiary]: tertiaryButtonConfig
}

export const buttonSize = {
  [ButtonSize.Large]: 'px-6 px-[7.188rem] h-12',
  [ButtonSize.Medium]: 'px-6 py-4 h-12'
}
