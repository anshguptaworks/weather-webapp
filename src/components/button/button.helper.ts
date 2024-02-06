import { IconProps } from '../../assets'

import { baseClass, buttonSize, variants } from './button.config'
import { ButtonSize, ButtonVariant, RestButtonConfig } from './button.types'

const getVariantClass = (variant: ButtonVariant) => {
  const variantProps = variants[variant]
  if (!variantProps) {
    return []
  }
  return [
    variantProps.background,
    variantProps.border,
    variantProps.text,
    variantProps.hover,
    variantProps.disabled,
    variantProps.focus
  ]
}

const getButtonClass = (variant: ButtonVariant) => {
  return [...baseClass, ...getVariantClass(variant)]
}

export const VariantMappingToClass: Record<ButtonVariant, string[]> = {
  [ButtonVariant.Primary]: getButtonClass(ButtonVariant.Primary),
  [ButtonVariant.Secondary]: getButtonClass(ButtonVariant.Secondary),
  [ButtonVariant.Tertiary]: getButtonClass(ButtonVariant.Tertiary)
}

export const getButtonSizeClass = (size?: ButtonSize) => {
  if (size === undefined) return ''

  return buttonSize[size]
}

export const getRestButtonConfig = ({ isFullWidth, icon }: RestButtonConfig) => ({
  'w-full': isFullWidth,
  'gap-4 items-center flex justify-center': icon
})

const getIconSize = (size?: ButtonSize) => {
  if (size === ButtonSize.Large) return 'w-6 h-6'
  if (size === ButtonSize.Medium) return 'w-6 h-6'
  return ''
}

export const getIconClassBasedOnVariant = (
  variant: ButtonVariant,
  size?: ButtonSize,
  isDisabled?: boolean,
  iconClass?: string
): IconProps => {
  const variantProps = variants[variant]
  if (!variantProps) {
    return {
      className: undefined,
      pathClassName: undefined
    }
  }

  return {
    className: getIconSize(size),
    pathClassName: iconClass
      ? iconClass
      : isDisabled
      ? variantProps.disabledIcon
      : variantProps.icon
  }
}
