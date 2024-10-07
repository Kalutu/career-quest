const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    companyLogo: {
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
      enum: ["Yearly", "Monthly", "Hourly"],
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
      enum: ["Internship", "Junior", "Mid", "Senior"],
      required: true,
    },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
