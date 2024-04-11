import mongoose from "mongoose";

const connectdb = async () => {
  // Changed to arrow function for brevity
  try {
    await mongoose.connect(
      "mongodb+srv://avinashrajraj628:soXWbvKQyw2gMgAU@cluster0.r5w1fmp.mongodb.net"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err);
  }
};

export default connectdb;
