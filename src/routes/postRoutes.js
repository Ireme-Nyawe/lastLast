import express from "express";
import {createPost, retrievePost, retrievePosts} from "../controller/postController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";

const postRoute = express.Router();
postRoute.post("/create",Authorization,uploadfile.single("image"),createPost);
postRoute.get("/posts",retrievePosts);
postRoute.get("/one/:id",retrievePost);

export default postRoute;
