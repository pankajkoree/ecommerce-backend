// modules
import express from "express";

import { getStatus } from "../controllers/home-controller.js";
import { getAllProducts } from "../controllers/product-controller.js";

const productRouter = express.Router();

productRouter.get("/", getStatus);
productRouter.get("/api/products", getAllProducts);

export default productRouter;
