import mongoose from "mongoose";

export default async function dbConnection() {
  const config = useRuntimeConfig();
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(config.db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
}
