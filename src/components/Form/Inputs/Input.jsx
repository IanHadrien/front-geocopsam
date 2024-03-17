import { TextField } from "@mui/material";

/* eslint-disable react/prop-types */
export default function Input({name, label, variant, size, className, value, type, placeholder, error, onChange, disabled, ...props}) {

  return (
    <div>
      <TextField 
        name={name}
        label={label} 
        placeholder={placeholder}
        variant={variant}
        size={size}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}