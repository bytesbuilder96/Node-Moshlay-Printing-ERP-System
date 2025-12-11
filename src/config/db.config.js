import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Database connected successfuly on host || ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database Not Conneted.");
  }
};
