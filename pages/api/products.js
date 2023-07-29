import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
    if(method === 'POST'){
        if(
          req.query?.id
        )
        {
          // this is for edit
          const {
            title,
      description,
      price,
      image,
      gender,
      kid,
      category,
      subcategory,
      brand,
      color,
      size,
      quantity,
      rating,
      reviews,
      discount,
      discountprice,
      date,
      time,
      statustate,
      featured,
      newarrival,
      bestseller,
      trending,
      dealoftheday,
          } = req.body;
          const productDoc = await Product.findByIdAndUpdate(req.query.id,
            {
              title,
              description,
              price,
              image,
              gender,
              kid,
              category,
              subcategory,
              brand,
              color,
              size,
              quantity,
              rating,
              reviews,
              discount,
              discountprice,
              date,
              time,
              statustate,
              featured,
              newarrival,
              bestseller,
              trending,
              dealoftheday,
            },
            {
              new: true,
              runValidators: true,
            }
          );
          if (!productDoc) {
            // Product with the given ID was not found
            return res.status(404).json({ message: 'Product not found' });
          }
          res.status(200).json(productDoc);

        }
        else{
          const {

            title,
      description,
      price,
      image,
      gender,
      kid,
      category,
      subcategory,
      brand,
      color,
      size,
      quantity,
      rating,
      reviews,
      discount,
      discountprice,
      date,
      time,
      statustate,
      featured,
      newarrival,
      bestseller,
      trending,
      dealoftheday
          } = req.body;

          const productDoc = await Product.create(
               {
                title,
                description,
                price,
                image,
                gender,
                kid,
                category,
                subcategory,
                brand,
                color,
                size,
                quantity,
                rating,
                reviews,
                discount,
                discountprice,
                date,
                time,
                statustate,
                featured,
                newarrival,
                bestseller,
                trending,
                dealoftheday,
               }
           )
           res.status(201).json(productDoc);
        }
    }
    if(method === 'GET'){
        if(req.query?.id)
        {
            const getproduct = await Product.findById(req.query.id);
            res.status(200).json(getproduct);
        }else {
            const getproducts = await Product.find({});
            res.status(200).json(getproducts);
        }

    }
    if (method === 'DELETE') {
      if(req.query?.id)
      {
        const deleteproduct = await Product.findByIdAndDelete(req.query.id);
        res.status(200).json(deleteproduct);
      }
    }
}