import User from "./../model/userModel.js";
import { createHash } from "./../utils/authUtils.js";

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

export default { register };
