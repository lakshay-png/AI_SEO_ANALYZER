
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import authRouter from "./routes/authroute.js";

connectDB()


const app=express()

app.use(cors())
app.use(express.json())

//create a home route
app.get('/',(req,res)=> res.send("server is running"))
app.use("/api/auth", authRouter);

//The port at which our backend server runs
const PORT = process.env.PORT || 5000;

//to run the port
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))

