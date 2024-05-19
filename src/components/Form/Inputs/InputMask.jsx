import { Label } from '@/components/ui/label'
import InputMask from 'react-input-mask'

/* eslint-disable react/prop-types */
export function InputMaskPhone({
  className = 'mb-4',
  label,
  id,
  placeholder,
  onChange,
  required,
  error,
  disabled,
  ...props
}) {
  return (
    <div className={`w-full items-center ${className}`}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && ' *'}
        </Label>
      )}
      <InputMask
        className={`${error ? 'border-red-500' : 'border-gray-300'} ${
          label && 'mt-2'
        } flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"`}
        disabled={disabled}
        id={id}
        mask="(99) 99999-9999"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
