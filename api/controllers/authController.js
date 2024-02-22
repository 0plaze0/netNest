import User from "./../model/userModel.js";
import { compareHash, createHash } from "./../utils/authUtils.js";
import JWT from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  if (!name) return res.status(400).json({ message: "Name is required." });
  if (!email) return res.status(400).json({ message: "email is required." });
  if (!password)
    return res.status(400).json({ message: "password is required." });
  if (!phone) return res.status(400).json({ message: "phone is required." });
  if (!address)
    return res.status(400).json({ message: "address is required." });

  try {
    const duplicate = await User.findOne({ email: email });

    if (duplicate)
      return res
        .status(404)
        .json({ message: "account already exist with the same email" });

    const hashPwd = await createHash(password);

    const newUser = {
      name,
      email,
      phone,
      address,
      password: hashPwd,
    };

    const result = await User.create(newUser);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Invalid email or password" });
    //checkuser
    const user = await User.findOne({ email });
    const comparePwd = await compareHash(password, user.password);
    if (!comparePwd)
      return res.status(200).json({ message: "Password didn't match" });

    const token = await JWT.sign(
      { _id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    return res
      .status(200)
      .cookie("access-token", token, {
        sameSite: "none",
        secure: "false",
      })
      .json({
        _id: user._id,
        email: user.email,
        address: user.address,
        phone: user.phone,
        token,
      });
  } catch (err) {
    console.log(err.message);
  }
};

const test = (req, res) => {
  try {
    return res.status(200).json({ message: "Protected Route" });
  } catch (err) {
    console.log(err.message);
    return res.status(401).send({
      success: false,
      err,
      message: "Error in admin middleware",
    });
  }
};

export default { register, login, test };
