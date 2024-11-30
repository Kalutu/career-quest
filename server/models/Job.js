const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  minPrice: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v <= this.maxPrice;
      },
      message:
        "Minimum salary should be less than or equal to the maximum salary.",
    },
  },
  maxPrice: {
    type: Number,
    required: true,
  },
  salaryType: {
    type: String,
    enum: ["Hourly", "Monthly", "Yearly"],
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  postingDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  experienceLevel: {
    type: String,
    enum: [
      "No experience",
      "Internship",
      "Entry Level",
      "Mid Level",
      "Senior Level",
      "Work remotely",
    ],
    required: true,
  },
  requiredSkillset: {
    type: [String], // Array of skills
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Temporary"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

// Create a model based on the schema
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
