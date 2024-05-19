/* eslint-disable react/prop-types */
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectWithLabel({
  label,
  id,
  placeholder,
  data,
  onChange,
  required,
  error,
  value,
}) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={id}>
        {label}
        {required && ' *'}
      </Label>
      <Select value={value} onValueChange={(e) => onChange({ value: e })}>
        <SelectTrigger
          className={`w-full ${error && 'border-red-500'} border-2`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.map((item) => (
              <SelectItem key={item?.id} value={item?.id}>
                {item?.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
