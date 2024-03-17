import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// eslint-disable-next-line react/prop-types
export function InputWithLabel({ label, id, type, placeholder, onChange, required, ...props }) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={id}>{label}{required && " *"}</Label>
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
