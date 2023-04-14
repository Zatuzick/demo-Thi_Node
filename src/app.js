import express from "express";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";

import cors from "cors";

import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/demo");

export const viteNodeApp = app;
