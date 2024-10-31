import { forwardRef } from "react";

const Input = forwardRef(function Input(
   { className, placeholder = "", type = "text", value = undefined, onChange = null },
   ref
) {
   return (
      <input
         className={className}
         type={type}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         ref={ref}
      />
   );
});

export default Input;
