import express from "express";
import { connectDB } from "./config/dbinit.js";
import { env } from "./config/env.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello world");
});

const PORT = env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
