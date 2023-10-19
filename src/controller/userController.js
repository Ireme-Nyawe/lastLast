import usersModel from "../models/userModel";
import postModel from "../models/postModel";
import commentModel from "../models/commentModel";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, {genSalt, hash} from "bcrypt";
import userModel from "../models/userModel";

export const createAccount = async (req,res) =>{
    try {
        const {fname, lname,email,password,profile} = req.body;

        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!validateEmail.test(email)) {
          return res.status(400).json({
              status: "400",
              message: "Invalid Email, Use like 'example.com'",
          });
      }
      const checkEmail = await userModel.findOne({email});
      if(checkEmail) {
        return res.status(400).json({
            status: "400",
            message: "User With Simillar Email Registered , Try Another!",
        });
      }

      const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[a-z\A-Zd]{6,}$/;
      if (!validatePassword.test(password)) {
          return res.status(400).json({
              status: "400",
              message: "A Weak Password, Use Both Characters And Number And Not Less Than 6 Digits!",
          });
      }

      let userProf;
      if(req.file) userProf = await uploadToCloud(req.file, res);
      const encrypt = await bcrypt.genSalt(10);
      const hashedpass = await bcrypt.hash(password, encrypt);
      const SignUp = await userModel.create({
          fname,
          lname,
          email,
          password: hashedpass,
          Profile: userProf?.secure_url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2D5cL1VMoUWovvU-4BPSbv&ust=1697791350541000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDA_uXbgYIDFQAAAAAdAAAAABAE",
      });
      return res.status(200).json({
        status: "200",
        message: "Good Job, User Account Created Successfully; Check Data:",
        data: SignUp,
      });

    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed To create User Account; Check Back!",
            error:error.message,
        });
    }
};

// user Login 
export const signIn = async (req, res) => {
    try {
      const check =await userModel.findOne({
        email: req.body.email,
      });
      if(!check){
        return res.status(404).json({
          status: "404",
          message: "User Not Found, Top Up SignUp!",
        });
      }
      const comparePassword = await bcrypt.compare(req.body.password, check.password);
      if(!comparePassword){
        return res.status(404).json({
          status: "404",
          message: "Incorrect Password!",
        });
      }
      const token = await Jwt.sign(
        { id: check._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIREDTIME}
      );
      return res.status(200).json({
        status: "200",
        message: "Good Job, You are Logged In",
        data: check,
        token: token,
      })
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Failed To Login, CheckBack",
        error: error.message,
      });
    }
  };