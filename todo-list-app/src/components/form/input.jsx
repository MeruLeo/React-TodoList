import "./input.css";
import { useState } from "react";
import { useField } from "formik";

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(field.value || "");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    field.onBlur(e);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    field.onChange(e);
  };

  return (
    <div className="flex flex-col-reverse text-white relative m-2 w-fit">
      <input
        {...field}
        {...props}
        type={type}
        autoComplete="off"
        className="p-2 border-1 border-gray-600 rounded-lg outline-0 bg-transparent focus:border-purple-org transition-all duration-150"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChange}
      />
      <label
        className={`absolute transition-all right-2 duration-100 ease-in ${isFocused || inputValue ? "-top-3 text-purple-org bg-background-dark text-sm" : "text-gray-600 top-2"}`}
        style={{ pointerEvents: "none" }}
      >
        {meta.touched && meta.error ? meta.error : label}
      </label>
    </div>
  );
};

export default InputField;
