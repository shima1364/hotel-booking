import express from "express";
const router = express.Router();
router.get("/", (req,res) => {res.send("endpoint auth")})
router.get("/register", (req,res) => {res.send("endpoint register")})



export default router