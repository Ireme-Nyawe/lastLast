import express from "express";
import { createPost } from "../controller/postController";

const postRoute = express.Router();
postRoute.post("/create",createPost);

export default postRoute;
