import React, { ReactElement, FunctionComponent } from 'react'

import { IconsType } from './types'
import NotFound from './icons/notFound'
import OnBoardingCornerSvg from './icons/onBoardingCornerSvg'
import Direction from './icons/direction'
import Sun from './icons/sun'
import Moon from './icons/moon'
import Delete from './icons/delete'
import Sort from './icons/sort'
import Search from './icons/search'

const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.direction, Direction],
  [IconsType.notFound, NotFound],
  [IconsType.onBoardingCornerSvg, OnBoardingCornerSvg],
  [IconsType.sun, Sun],
  [IconsType.moon, Moon],
  [IconsType.delete, Delete],
  [IconsType.sort, Sort],
  [IconsType.search, Search]
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
