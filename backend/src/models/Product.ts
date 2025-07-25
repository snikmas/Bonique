import mongoose from "mongoose"

const ProductSchema = {
  name: {
    required: true,
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String
  },
  available:{
    type: Boolean,
    default: true
  }
}

export default ProductSchema;