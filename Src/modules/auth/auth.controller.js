import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register=async(req,res)=>{
    try {
        const {userName,password,email}=req.body;
        const user=await userModel.findOne({email: email});
        if(user){
            return res.status(409).json({message:"User already registered"});
        }
        const hashedPassword=await  bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
        const newUser=await userModel.create({userName,password:hashedPassword,email});
    
        return res.json({message:"successfully",newUser});
    } catch (error) {
        return res.status(400).json({message:"catch error",error:error.stack});
    }
}
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email: email});
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        const isMatch=await bcrypt.compareSync(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid password"});
        }
        const token =await jwt.sign({id:user._id},process.env.LOGINTOKEN)
        return res.json({message:"Logged in successfully",token});
    } catch (error) {
        return res.status(400).json({message:"Catch error",error:error.stack});
    }
}