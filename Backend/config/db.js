import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://tstar3715:TONYSTAR7959@cluster0.xa3prfk.mongodb.net/?appName=Cluster0').then(()=>console.log("Db connected"))
}

