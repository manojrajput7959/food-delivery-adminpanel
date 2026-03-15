import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/route.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(cookieParser())
app.use(express.json());
app.use(cors());


dotenv.config();

// REQUIRED FOR MULTER FILE HANDLING

// db connection
connectDB();

// Api endPoints

app.use("/api/user",userRoute)
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))



app.get("/", (req, res) => {
  res.send("API is Working...");
});

app.listen(port, () => {
  console.log(`server is working http://localhost:${port}`);
});

