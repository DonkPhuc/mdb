import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phucdongocc:wDZaLwqiPosr995B@mdb.v6bu8vx.mongodb.net/?retryWrites=true&w=majority&appName=mdb"
    );
    console.log("Connect successfully to database!");
  } catch (error) {
    console.log({ error: error.message });
  }
});
