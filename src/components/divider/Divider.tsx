import React from 'react'
import cx from 'classnames'

interface DividerProps {
  className?: string
}

const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={cx(
        'w-full border border-solid border-primary h-1 bg-primary rounded-full my-4',
        className
      )}
    />
  )
}

export default Divider
