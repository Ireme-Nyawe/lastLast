import express from "express";
import { createPost, viewPosts } from "../controller/postController";

const postRoute = express.Router();
postRoute.post("/create",createPost);
postRoute.get("/posts",viewPosts);

export default postRoute;
