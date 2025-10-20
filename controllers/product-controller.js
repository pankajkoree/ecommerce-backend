import Products from "../models/Products.js";

export const getAllProducts = async (req, res) => {
  try {
    const response = await Products.find();
    if (!response) {
      return res.json({
        error: "products not found",
        status: 404,
      });
    }
    return res.json(response);
  } catch (error) {
    return res.json({
      error: error,
      status: 404,
    });
  }
};

export const getProductsForHomeByCategory = async (req, res) => {
  try {
    const categoryName = req.params.name;
    const response = await Products.find({
      category: RegExp(categoryName, "i"),
    });
    if (!response) {
      return res.json({
        status: 400,
        error: "Error while fetching datas",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      error: error,
      status: 404,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const response = await Products.findOne({ id });
    if (isNaN(id)) {
      return res.json({
        status: 400,
        error: "invalid id - must be a number",
      });
    }
    if (!response) {
      return res.json({
        status: 400,
        error: "product not found",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      error: error,
      status: 404,
    });
  }
};

export const getSearchProduct = async (req, res) => {
  try {
    const name = req.params.name;
    const response = await Products.find({ title: RegExp(name, "i") });
    if (!name) {
      return res.json({
        status: 400,
        error: "invalid product name",
      });
    }
    if (!response) {
      return res.json({
        status: 400,
        error: "no product found",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getLimitedProducts = async (req, res) => {
  try {
    const limit = req.params.limit || 0;
    const response = await Products.find().limit(limit);
    if (!response) {
      return res.json({
        status: 400,
        error: "no products found",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getLimitedSkippedProducts = async (req, res) => {
  try {
    const skip = req.params.skip || 0;
    const limit = req.params.limit || 0;
    const response = await Products.find().skip(skip).limit(limit);
    if (!response) {
      return res.json({
        status: 400,
        error: "no products found",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getProductsCategory = async (req, res) => {
  try {
    const response = await Products.distinct("category");
    if (!response) {
      return res.json({
        status: 400,
        error: "categories not found",
      });
    }
    return res.json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};
