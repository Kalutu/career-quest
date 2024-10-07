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
    required: true,
  },
  experienceLevel: {
    type: String,
    enum: ["No experience", "Internship", "Work remotely"],
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
        // Basic email format validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
});

// Create a model based on the schema
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
