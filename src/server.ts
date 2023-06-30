import express from "express";
import userRouter from "./api/routes";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
