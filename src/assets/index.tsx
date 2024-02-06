import React, { ReactElement, FunctionComponent } from 'react'

import { IconsType } from './types'
import Logo from './icons/logo'
import NotFound from './icons/notFound'
import OnBoardingCornerSvg from './icons/onBoardingCornerSvg'

const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.logo, Logo],
  [IconsType.notFound, NotFound],
  [IconsType.onBoardingCornerSvg, OnBoardingCornerSvg]
])

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> | null => {
  const IconComponent = iconsMap.get(icons)
  if (IconComponent) {
    return <IconComponent {...iconsProp} />
  } else {
    console.error('Icon not found')
    return null
  }
}

export interface IconProps {
  className?: string
  pathClassName?: string
}
