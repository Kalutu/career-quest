const Job = require("../models/Job");

// Get all jobs with pagination and optional filtering
const getAllJobs = async (req, res) => {
  const { page = 1, limit = 10, status = "Active" } = req.query; // Default to Active jobs

  try {
    const jobs = await Job.find({ status })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalJobs = await Job.countDocuments({ status });

    res.status(200).json({
      totalJobs,
      totalPages: Math.ceil(totalJobs / limit),
      currentPage: page,
      jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a job by ID
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job || job.status === "Inactive") {
      return res.status(404).json({ message: "Job not found or inactive" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job
const createJob = async (req, res) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    requiredSkillset,
    postedBy,
  } = req.body;

  // Basic validation for required fields
  if (
    !companyName ||
    !jobTitle ||
    !minPrice ||
    !maxPrice ||
    !salaryType ||
    !jobLocation ||
    !postingDate ||
    !experienceLevel ||
    !employmentType ||
    !description ||
    !requiredSkillset ||
    !postedBy
  ) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }

  const newJob = new Job({
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    requiredSkillset,
    postedBy,
  });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing job
const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Soft delete a job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    job.status = "Inactive";
    await job.save();

    res.status(200).json({ message: "Job deactivated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
