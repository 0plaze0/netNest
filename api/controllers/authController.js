import user from "./../model/userModel.js";

const register = (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: "cannot register user" });
  }
};

export default { register };
