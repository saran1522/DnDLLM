import React from "react";

function LlmInput({ label, name, value, setValue }) {
  return (
    <div className="flex p-1 flex-col">
      <label htmlFor={name} className="text-sm pb-2">
        {label}
      </label>
      <input
        id="text"
        name={name}
        value={value}
        onChange={(e) => setValue(e)}
        placeholder="Type something..."
        className="border nodrag border-gray-400 rounded-md p-2"
      />
    </div>
  );
}

export default LlmInput;
