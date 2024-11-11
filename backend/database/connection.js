import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log(`Error while connecting to the database: ${err}`);
    });
};