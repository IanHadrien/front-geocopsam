import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// eslint-disable-next-line react/prop-types
export function InputWithLabel({ className="mb-4", label, id, type, placeholder, onChange, required, ...props }) {
  return (
    <div className={`grid w-full items-center gap-1.5 ${className}`}>
      {label && <Label htmlFor={id}>{label}{required && " *"}</Label>}
      <Input 
        type={type}
        id={id}
        placeholder={placeholder} 
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
