import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[database]: Mongodb connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(
      `[database]: Error when try connect to the database: ${error.message}`
    );
    process.exit(1);
  }
};
