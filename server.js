import express from "express";
import dotenv from "dotenv";
import contactRoutes from './routes/contactRoutes.js';
const app = express();
const env = dotenv.config();
const port = 3000;
app.use(express.json());
app.use("/api/contacts",contactRoutes);
app.listen(port,()=>{
    console.log(`Server running on port number ${port}`);
})