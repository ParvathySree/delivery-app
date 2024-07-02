import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

//app config
const app = express()
const port = 4000

//middleware
app.use(bodyParser.json())
app.use(cors())

//db connection
connectDB();


//api end points 
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})



app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
}) 