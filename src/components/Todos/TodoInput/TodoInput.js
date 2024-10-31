import { forwardRef } from "react";

import Input from "../../../ui/Input/Input";

const TodoInput = forwardRef(function TodoInput(
   { className, type = "text", value = undefined, onChange = null, placeholder = "" },
   ref
) {
   return (
      <Input
         className={className}
         type={type}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         ref={ref}
      />
   );
});

export default TodoInput;
