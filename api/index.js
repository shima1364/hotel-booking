import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser';
import dotenv , { config } from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import reservationsRoute from "./routes/reservations.js"

const app = express()
app.use(cors())
dotenv.config()
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo")
      } catch (error) {
        throw error
      }
    };
    mongoose.connection.on('disconnected', () => {
        console.log("mongo disconnected");
      });
    app.use(cookieParser());
    app.use(express.json());
    app.use("/api/auth", authRoute); 
    app.use("/api/hotels", hotelsRoute); 
    app.use("/api/rooms", roomsRoute); 
    app.use("/api/users", usersRoute); 
    app.use('/api/users', reservationsRoute);
    
    app.use((err,req,res,next)=>{
      console.log(err, 'err')
      const errorStatuus = err.status || 500
      const errorMessage = err.errorMessage || "Something went wrong"
      return res.status(errorStatuus).json(errorMessage)
    });

app.listen(8800, ()=>{
    connect()
    console.log('connected to backend')
}
)
