import mongoose from "mongoose";
import "dotenv/config";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Ket noi thanh cong den Database");
  } catch (error) {
    console.error("Khong the ket noi toi Database", error);
  }
};

export default connectDB;
