import express from "express";
const app = express();
const port = 4000;
import mongoose from "mongoose";
import route from "./routes/studentRoutes.js";
import routess from "./routes/facilitatorRoutes.js";

app.use(express.json())
app.use(routess)

mongoose.connect("mongodb://localhost:27017/studentMgtSystem")
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})