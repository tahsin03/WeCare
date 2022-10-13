import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './Dataimport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';

dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import",ImportData);
app.use("/api/products",productRoute);

//ERROR Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT,console.log('Server listening on port ${PORT}'));