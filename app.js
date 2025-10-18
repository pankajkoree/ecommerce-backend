import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRouter.js";
import pageNotFound from "./controllers/error-controller.js";

dotenv.config();

const PORT = 3000;

const server = express();

server.use(productsRouter);

// if url doesn't match with any routes
server.use(pageNotFound);

mongoose.connect(process.env.DB_URI).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
