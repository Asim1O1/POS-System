import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { APP_ORIGIN } from "./constants/env.js";
import HTTP_STATUS from "./constants/http.js";
import errorHandler from "./middlewares/errorhandler.js";
import notFoundHandler from "./middlewares/notfoundHandler.js";

const app = express();

app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(HTTP_STATUS.OK).json({
    status: "success",
    message: "Health check successful!",
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
