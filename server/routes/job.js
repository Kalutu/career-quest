const express = require("express");
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/job");

const router = express.Router();

// Middleware for validating object IDs
const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "Invalid job ID" });
  }
  next();
};

// Get all jobs
router.get("/", getAllJobs);

// Get job by ID with ID validation
router.get("/:id", validateObjectId, getJobById);

// Create a new job
router.post("/", createJob);

// Update a job by ID with ID validation
router.put("/:id", validateObjectId, updateJob);

// Soft delete a job by ID with ID validation
router.delete("/:id", validateObjectId, deleteJob);

module.exports = router;
