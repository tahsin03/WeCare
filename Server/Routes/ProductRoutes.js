import express  from "express";
import asyncHandler from 'express-async-handler';
import products from '../data/Products';
import Product from './../Models/ProductModel.js';

const productRoute = express.Router();
productRoute.get('/', asyncHandler( async() => {
    const products = await Product.find({});
    res.json(products);
})) ;


export default productRoute;