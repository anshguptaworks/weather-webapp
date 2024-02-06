import React from 'react'
import cx from 'classnames'

interface CardsProps {
  className?: string
  children?: React.ReactNode
}

const Card = ({ className, children }: CardsProps) => {
  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 0px 80px 0px rgba(34, 3, 73, 0.08)'
      }}
      className={cx(
        'md:p-6 p-4 md:max-w-3/4 min-w-[320px] w-[90%] md:w-[96%] md:min-h-96 min-h-40 h-fit backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl',

        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
