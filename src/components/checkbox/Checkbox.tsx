import React, { forwardRef, useEffect } from 'react'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, onBlur, onChange, name, checked, indeterminate, id, disabled = false, ...props },
    ref
  ) => {
    useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.indeterminate = indeterminate || false
      }
    }, [ref, indeterminate])

    const onChangeHandler = (value: boolean) => {
      onChange({ target: { name, value, checked: value } } as any)
    }

    return (
      <input
        type="checkbox"
        id={id}
        name={name}
        ref={ref}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChangeHandler(e.target.checked)}
        onBlur={onBlur}
        {...props}
        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded"
      />
    )
  }
)

interface CheckboxProps {
  name?: string
  id: string
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
