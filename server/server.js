import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';

dotenv.config();
connectDatabase();
const app = express()

//Load product from server
app.get("/api/products",(req,res) => {
    res.send(products);
});
//Load single product from server
app.get("/api/product/:id",(req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/",(req, res)=> {
    res.send("API is running");
})
const PORT = process.env.PORT || 1000;
app.listen(PORT,console.log('Server listening on port ${PORT}'));