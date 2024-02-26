import mongoose from "mongoose";

export default defineNitroPlugin(() => {
  mongoose.connect(useRuntimeConfig().DB_URL);
  console.log("Connected to DB");
});
