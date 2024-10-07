const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const jobsRouter = require("./routes/job.js");

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/jobs", jobsRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the database sucessfully");
    app.listen(port, () => {
      console.log(`App is listening to port ${port}`);
    });
  })
  .catch((error) => console.log(error));
