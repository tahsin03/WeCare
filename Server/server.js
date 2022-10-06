import express from 'express';
import products from "./data/Products.js"

const app = express();

// LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products);
});

// Single product for server 
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(5001,console.log("Server Running on port 5001"));