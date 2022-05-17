import express from "express";
import morganMiddleware from "./middleware/morganMiddleware";
import cors from "cors";
import "reflect-metadata";

const app = express();

app.use(cors());
app.use(express.json({
    type: "*/*"
}));
app.use(express.urlencoded({
    extended: true
}));

app.use(morganMiddleware);

export default app;