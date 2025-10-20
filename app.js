import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRouter.js";
import pageNotFound from "./controllers/error-controller.js";
import introRouter from "./routes/introRouter.js";
import cors from "cors";



dotenv.config();

const PORT = 3999;

const server = express();

app.use(cors());
server.use(introRouter);
server.use(productsRouter);

// if url doesn't match with any routes
server.use(pageNotFound);

mongoose.connect(process.env.DB_URI).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
