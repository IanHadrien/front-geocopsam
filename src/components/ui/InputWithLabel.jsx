/* eslint-disable react/prop-types */
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputWithLabel({
  className = 'mb-4',
  label,
  id,
  type,
  placeholder,
  onChange,
  required,
  error,
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
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className={`${error && 'border-red-500'} ${label && 'mt-2'}`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
