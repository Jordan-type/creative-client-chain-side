import * as React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholder: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ icon, placeholder, name, type, onChange, className, ...props }, ref) => {
    return (
      <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
        {icon}
        <input
          name={name}
          onChange={onChange}
          type={type}
          className="bg-transparent outline-none border-none w-full"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
