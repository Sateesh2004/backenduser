import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import User from "../models/User";
import generateToken from "../utils/token";

export const register = async (req: Request, res: Response): Promise<any>  => {
    try {
      const { name, email, password,password_cofirmation } = req.body;
      if(password!==password_cofirmation){
        return res.status(400).json({message:"Password Does not match."})
    }
    const existinguser = await User.findOne({email})
    if(existinguser){
        return res.status(409).json({message:"User exist"})
    }
    const hashedpassword=await bcrypt.hash(password, 8);

        
        const user = new User({
            name,
            email,
            password: hashedpassword,
        })
      
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  };
  



  export const login = async (req:Request,res:Response): Promise<any> =>{
    try{
        const {email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message:"User not found."})
        }
        const ispasswordValid = await bcrypt.compare(password,existingUser.password)
        if(!ispasswordValid){
            return res.status(400).json({message:"Password Invalid."})
        }
        generateToken(res,existingUser)
        
        
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
}


