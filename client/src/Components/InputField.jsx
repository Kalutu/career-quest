import React from "react";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleChange} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default InputField;
