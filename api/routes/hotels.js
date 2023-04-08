import express from "express";
import {
   createHotel,
   deleteHotel,
   getHotel,
   getHotels,
   updateHotel,
 } from "../controllers/hotel.js";


const router = express.Router();
//post
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
 //delete
 router.delete("/:id", deleteHotel);
 //get
 router.get("/:id", getHotel);
 //get all
 router.get("/", getHotels);




export default router;