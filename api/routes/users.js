import express from "express";import {
    deleteUser,
    getUser,
    getUsers,
    updateUser,
  } from "../controllers/user.js";

 const router = express.Router();
 //update
 router.put("/:id", updateUser);
  //delete
  router.delete("/:id", deleteUser);
  //get
  router.get("/:id", getUser);
  //get all
  router.get("/", getUsers);





export default router







 // import { verifyToken } from "../utils/verifyToken.js";
 
//  router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("hello user, you are logged in")
//  })