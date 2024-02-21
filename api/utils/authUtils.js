import bcrypt from "bcrypt";

const createHash = async (password) => {
  try {
    const salt = process.env.SALT;
    const hashPwd = bcrypt.hash(password, salt);
    return hashPwd;
  } catch (err) {
    console.log(err.message);
  }
};

const compareHash = async (password, hashedPassword) => {
  try {
    return await bcrypt(password, hashedPassword);
  } catch (err) {
    console.log(err.message);
  }
};

export default { createHash, compareHash };
