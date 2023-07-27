import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Check if the model is already compiled during HMR
const existingModel = mongoose.models.Product;

// Only define the model if it doesn't exist yet
let productSchema;
if (existingModel) {
  productSchema = existingModel.schema; // Get the existing schema
} else {
  productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
  });
}

const Product = model('Product', productSchema);

export { Product };
