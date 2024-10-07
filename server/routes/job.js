const express = require("express");
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/job");

const router = express.Router();

// Get all jobs
router.get("/", getAllJobs);

// Get job by ID
router.get("/:id", getJobById);

// Create a new job
router.post("/", createJob);

// Update a job by ID
router.put("/:id", updateJob);

// Delete a job by ID
router.delete("/:id", deleteJob);

module.exports = router;
