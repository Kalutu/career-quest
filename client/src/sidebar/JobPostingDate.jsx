import React from "react";
import InputField from "../Components/InputField";

const JobPostingDate = ({ handleChange }) => {
  const now = new Date();
  const twetyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //   Convert Date to string
  const twetyFourHoursAgoDate = twetyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" value="" onChange={handleChange} />
          <span className="checkmark"></span>All time
        </label>
        <InputField
          handleChange={handleChange}
          value={twetyFourHoursAgoDate}
          title="Last 24 Hours"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Lat 30 Days"
          name="test3"
        />
      </div>
    </div>
  );
};

export default JobPostingDate;
