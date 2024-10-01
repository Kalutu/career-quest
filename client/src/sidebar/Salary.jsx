import React from "react";
import Button from "./Button";
import InputField from "../Components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div>
        <Button onClickhandler={handleClick} value="" title="Hourly" />
        <Button onClickhandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickhandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" value="" onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
