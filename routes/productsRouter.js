// modules
import express from "express";

import {
  getAllProducts,
  getLimitedProducts,
  getLimitedSkippedProducts,
  getProductById,
  getProductsCategory,
  getProductsForHomeByCategory,
  getSearchProduct,
} from "../controllers/product-controller.js";

const productRouter = express.Router();

productRouter.get("/api/products", getAllProducts);
productRouter.get("/api/products/category/:name", getProductsForHomeByCategory);
productRouter.get("/api/products/id/:id", getProductById);
productRouter.get("/api/products/name/:name", getSearchProduct);
productRouter.get("/api/products/limit/:limit", getLimitedProducts);
productRouter.get(
  "/api/products/limit/:skip/:limit",
  getLimitedSkippedProducts
);
productRouter.get("/api/products/categories", getProductsCategory);

export default productRouter;
