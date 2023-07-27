import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
    if(method === 'POST'){
        const {title, description, price, image} = req.body;

       const productDoc = await Product.create(
            {
                title,
                description,
                price,
                image
            }
        )
        res.status(201).json(productDoc);
    }
    if(method === 'GET'){
        const getproducts = await Product.find({});
        res.status(200).json(getproducts);
    }
    if(method === 'DELETE'){
        const {id} = req.query;
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.status(200).json(deleteProduct);
    }

}