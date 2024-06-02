import "./input.css";
import { useState } from "react";

const InputField = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex flex-col-reverse text-white relative m-2 w-fit top-80">
        <input
          required
          type="text"
          name="text"
          autoComplete="off"
          className="p-2 border-1 border-gray-600 rounded-lg outline-0 bg-transparent focus:border-purple-org transition-all duration-150"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label
          className={`absolute transition-all right-2 duration-100 ease-in ${isFocused || inputValue ? "-top-3 text-purple-org bg-background-dark text-sm" : "text-gray-600 top-2"}`}
          style={{ pointerEvents: "none" }}
        >
          نام و نام خانوادگی
        </label>
      </div>
    </>
  );
};

export default InputField;
