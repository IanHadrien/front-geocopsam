import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// eslint-disable-next-line react/prop-types
export function SelectWithLabel({ label, id, placeholder, onChange, required, ...props }) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={id}>{label}{required && " *"}</Label>
      <Select>
        <SelectTrigger className="w-full border-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
