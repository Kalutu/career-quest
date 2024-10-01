import React from "react";
import InputField from "../Components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test4" value="" onChange={handleChange} />
          <span className="checkmark"></span>Any Experience
        </label>
        <InputField
          handleChange={handleChange}
          value="internship"
          title="Internship"
          name="test4"
        />
        <InputField
          handleChange={handleChange}
          value="work Remotely"
          title="Work Remotely"
          name="test4"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
