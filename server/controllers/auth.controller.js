import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export const registerController = async(req, res) => {
  try {
    const { name, email, password, mobileNumber } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already exists",
      });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};

export const loginController = async(req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).send({
        success: false,
        message: 'Invalid Credential'
      })
    }
    if(user.role !== req.body.role){
      return res.status(500).send({
        success: false,
        message :"Role doesn't pass"
      })
    }
    const comparePassword = bcryptjs.compareSync(password, user.password);
    if(!comparePassword){
      return res.status(500).send({
        success: false,
        message: 'Invalid Credential'
      })
    }
    const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET,{expiresIn:'1d'});
    return res.status(200).send({
      success: true,
      message:'Login Successfully',
      user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login API",
      error,
    });
  }
}

export const currentUserController = async(req, res) => {
  try {
    const user = await User.findOne({_id:req.body.userId});
    return res.status(200).send({
      success: true,
      message:'User fetch successfully',
      user
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Unable to get current user'
    })
  }
}
