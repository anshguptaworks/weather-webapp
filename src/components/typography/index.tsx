import cx from 'classnames'

import { FontSize, FontWeight } from './types/typography.type'
import { TYPOGRAPHY_FONT_WEIGHT, TYPOGRAPHY_SIZE } from './constant/typography.constant'
import { fontWeightClassNames, sizeClassNames } from './config/typography.config'

const Typography = ({
  children,
  size = TYPOGRAPHY_SIZE[14],
  fontWeight = TYPOGRAPHY_FONT_WEIGHT[400],
  className,
  onClick,
  as = 'div'
}: TypographyProps) => {
  const Component = as

  return (
    <Component
      onClick={onClick}
      className={cx(
        [sizeClassNames.get(size) || '', fontWeightClassNames.get(fontWeight) || ''],
        className
      )}
    >
      {children}
    </Component>
  )
}

interface TypographyProps {
  children: React.ReactNode
  size?: FontSize
  fontWeight?: FontWeight
  className?: string
  onClick?: VoidFunction
  as?: keyof JSX.IntrinsicElements
}

Typography.SIZE = TYPOGRAPHY_SIZE

Typography.WEIGHT = TYPOGRAPHY_FONT_WEIGHT

export default Typography
