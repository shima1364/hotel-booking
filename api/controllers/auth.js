import User from "../models/User.js"
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const register = async (req,res,next) =>{
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);


    const newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password: hash
    })
    await newUser.save()
    res.status(200).send("user is added")
  } catch (err) {
    next(err)
  }  
}
export const login = async (req,res,next) =>{
  try {
   const user = await User.findOne({username:req.body.username})
   if(!user) return next(createError(404, "User not found!"))
   const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
   if(!isPasswordCorrect) return next(createError(400, "email or password is wrong"));
   const token = jwt.sign(
    {id: user._id},  process.env.JWT)

   
   const{password, username,_id, ...otherDetails} = user._doc;
   res
   .status(200)
   .json({token, userId:_id});
  } catch (err) {
    next(err)
  } 
}  