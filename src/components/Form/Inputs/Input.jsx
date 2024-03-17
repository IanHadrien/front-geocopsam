import { TextField } from "@mui/material";

/* eslint-disable react/prop-types */
export default function Input({name, label, variant, className, value, type, placeholder, error, onChange, disabled, ...props}) {

  return (
    <div>
      <TextField 
        name={name}
        label={label} 
        placeholder={placeholder}
        variant={variant}
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