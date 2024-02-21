import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`connected to MongoDB Database ${conn.connection.host}`);
  } catch (e) {
    console.log(err.message);
  }
};

export default connectDB;
