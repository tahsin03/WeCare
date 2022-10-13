import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';

const productRoute = express.Router()

//GET ALL PRODUCT
productRoute.get(
    "/",
    asyncHandler(async(req,res)=> {
    const products = await Product.find({});
    res.json(products);
})
);

//GET SINGLE PRODUCT
productRoute.get(
    "/:id",
    asyncHandler(async(req,res)=> {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        req.statusCode(404);
        throw new Error("Product not Found");
    }
    
})
);

export default productRoute;