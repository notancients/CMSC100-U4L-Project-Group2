import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./server/router.js";

dotenv.config();

try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to the remote database.");
} catch (e) {
    console.log("There was an error with connecting to the database.");
    console.log(e);
}

const app = express();

app.use(router);

console.log("Listening to port ", process.env.PORT);
app.listen(process.env.PORT);
