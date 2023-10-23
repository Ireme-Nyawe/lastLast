import express from "express";
import {createPost, deletePost, retrievePost, retrievePosts, updatePost} from "../controller/postController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";

const postRoute = express.Router();
postRoute.post("/create",Authorization,uploadfile.single("image"),createPost);
postRoute.put("/update/:id",Authorization,uploadfile.single("image"),updatePost);
postRoute.delete("/delete/:id",Authorization,uploadfile.single("image"),deletePost);
postRoute.get("/posts",retrievePosts);
postRoute.get("/one/:id",retrievePost);

export default postRoute;
