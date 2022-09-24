import express from 'express';
import products from "./data/Products.js"

const app = express();

// LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products);
});




app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(5001,console.log("Server Running on port 5001"));