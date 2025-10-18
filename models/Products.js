// modules
import mongoose from "mongoose";

const productScheme = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
  },
  tags: {
    type: [String],
    default: [],
  },
  brand: {
    type: String,
  },
  sku: {
    type: String,
  },
  weight: Number,
  dimensions: {
    width: Number,
    height: Number,
    depth: Number,
  },
  warrantyInformation: {
    type: String,
    required: true,
  },
  shippingInformation: {
    type: String,
    required: true,
  },
  availabilityStatus: String,
  reviews: [
    {
      rating: { type: Number, required: true },
      comment: String,
      date: Date,
      reviewerName: String,
      reviewerEmail: String,
    },
  ],
  returnPolicy: {
    type: String,
    required: true,
  },
  minimumOrderQuantity: Number,
  meta: {
    createdAt: Date,
    updatedAt: Date,
    barCode: String,
    qrCode: String,
  },
  images: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Product", productScheme);
