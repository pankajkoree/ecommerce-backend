import Products from "../models/products.js";

const getAllProducts = async (req, res) => {
  const response = await Products.find();
  if (!response) {
    return res.json({
      error: "products not found",
      status: 404,
    });
  }
  return res.json(response);
};

export default getAllProducts;
