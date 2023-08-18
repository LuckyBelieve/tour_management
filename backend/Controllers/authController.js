import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "successfully registered" });
  } catch (error) {}
};

export const Login = async (req,res) => {
  const email = req.body.email;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      res
        .status(404)
        .json({ success: false, message: "invalid email or password" });
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      res
        .status(404)
        .json({ success: false, message: "invalid email or password" });
    }
    const {password,role,...rest} = user._doc;

    // assigning the token to the user

    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d"
    });

    // setting the token in browser cookies
    res.cookie("accessToken",token,{
        httpOnly: true,
        expires:token.expiresIn,
    }).status(200).json({success:true,message:"successfully logged in",data:{...rest}})
  } catch (error) {}
};
