import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import {app ,server} from "./Socketserver/server.js";



app.use(express.json());
dotenv.config();
app.use(cors({
  credentials: true,
}));

app.use(cookieParser());

const PORT = process.env.PORT || 5001;
const URL = process.env.Mongodb_URL; 


try{
  mongoose.connect(URL);
  console.log("Mongodb Connected");
}catch(error){
  console.log("error");
}


app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})