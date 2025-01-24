import { Request, Response } from "express"
import jwt from "jsonwebtoken"


import { IUser } from "../models/User";



const generateToken = (res:Response,user:IUser)=>{
  try{
    const token = jwt.sign({id:user._id,username:user.email,role:user.role},process.env.SECRET_KEY_USER!,{expiresIn: '10d'})
    
   
  res.cookie("token", token, {
    httpOnly: true,  
    secure: true,  
    sameSite:'strict'  
  });
    return res.status(200).json({ message: "User sign successfully",username:user.name,email:user.email,role:user.role});
  }
  catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
    

}
export default generateToken