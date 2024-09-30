import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  // Filter Jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filtering
  const handleChange = (e) => {
    selectedCategory(e.target.value);
  };

  // Button Filtering
  const handleClick = (e) => {
    selectedCategory(e.target.value);
  };

  // Main functions
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filtering Input Items
    if (query) {
      filteredJobs = filteredItems;
    }
    // Filtering category
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ maxPrice, jobLocation, salaryType, employmentType }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left Side */}
        <div className="bg-white p-4 rounded">Left</div>

        {/* Job cards */}
        <div className="bg-white p-4 rounded col-span-2">
          <Jobs result={result} />
        </div>

        {/* Right Side */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
