import express from "express";
import mongoose from "mongoose";

const PORT = 3000;

const server = express();

mongoose.connect(process.env)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
