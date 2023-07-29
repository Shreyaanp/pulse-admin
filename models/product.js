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
    description: {type : String, default: "No description"},
    price: { type: Number, required: true },
    image: {type : String, default : "No image"},
    gender: { type: String, required: true },
    kid: { type: Boolean, default: false },
    category: { type: String, required: true }  ,
    subcategory: { type: String, required: true } ,
    brand: { type: String, required: true } ,
    color: { type: String, required: true } ,
    size: { type: String, required: true } ,
    quantity: { type: Number, required: true } ,
    rating: {type : String} ,
    reviews: {type : String},
    discount: {type: Number, default: 0} ,
    discountprice: {type: Number, default : 0 } ,
    date:{ type: Date, default: Date.now },
    time : {type : String, default : Date.now},
    statustate: { type: String, required: true } ,
    featured: { type: Boolean, default: false },
    newarrival: { type: Boolean, default: false },
    bestseller: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    dealoftheday: { type: Boolean, default: false },

  });
}

const Product = model('Product', productSchema);

export { Product };
