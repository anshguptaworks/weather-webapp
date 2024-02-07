import React from 'react'
import cx from 'classnames'

interface ToggleProps {
  checked: boolean
  value?: string
  className?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Toggle = ({ checked, className, onChange, value, onBlur }: ToggleProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cx('peer sr-only', className)}
      />
      <div className="w-11 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  )
}

export default Toggle
