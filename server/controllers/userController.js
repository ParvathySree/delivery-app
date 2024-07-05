import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req,res) => {
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id,user.email);
        res.json({success:true,token})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}

const createToken = (id,email) => {
    return jwt.sign({id,email},process.env.JWT_SECRET)
}

const signupUser = async (req,res) => {
    const {password,email} = req.body;
    try{
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success:false,message:"User already exist"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"Please enter strong password"})
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token,message:"User sign up successful"})

    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,signupUser}