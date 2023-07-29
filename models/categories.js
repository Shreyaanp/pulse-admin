import mongoose from "mongoose";
const {Schema, model} = mongoose;

const existingModel =   mongoose.models.Categories;

let categoriesSchema;
if(existingModel){
    categoriesSchema = existingModel.schema;
}
else{
    categoriesSchema = new Schema({
        
    })
}