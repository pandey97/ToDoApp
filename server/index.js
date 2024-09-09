import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import testRouter from "./routes/test.route.js"
import authRouter from "./routes/auth.route.js"
import toDoRouter from "./routes/home.route.js"

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);
app.use("/api/home", toDoRouter);