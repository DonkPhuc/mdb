import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  try {
    const { DB_NAME, DB_USERNAME, DB_PASSWORD } = useRuntimeConfig();
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_NAME}.v6bu8vx.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`
    );
    console.log("Connect successfully to database!");
  } catch (error) {
    console.log({ error });
  }
});
