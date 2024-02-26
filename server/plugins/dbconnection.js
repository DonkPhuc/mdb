import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(useRuntimeConfig().DB_URL);
    console.log("Connect successfully to database!");
  } catch (error) {
    console.log({ error: error.message });
  }
});
