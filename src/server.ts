import express from "express";
import { Routes } from "./api/routes";

const app = express();

app.use(express.json());

app.use("/user", new Routes().getRoutes());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
