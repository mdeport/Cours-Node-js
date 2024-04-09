import User from "../models/user.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    phoneNumber,
  });
  const doc = await newUser.save();
  res.status(201).json(doc);
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ token });
};
