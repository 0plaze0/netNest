import JWT from "jsonwebtoken";
import User from "./../model/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await JWT.verify(
      req.headers["access-token"],
      process.env.ACCESS_TOKEN_SECRET
    );
    req.user = decode;
    next();
  } catch (err) {
    console.log(err);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,

        message: "Unauthorize User",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send({
      success: false,
      err,
      message: "Error in admin middlware",
    });
  }
};

export default { requireSignIn, isAdmin };
