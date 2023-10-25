import express from "express";
import {createPost, deletePost, getAdminPosts, retrievePost, retrievePosts, updatePost} from "../controller/postController";
import uploadfile from "../helper/multer";
import AdminAuthorization from "../middleware/authenticate";

const postRoute = express.Router();
postRoute.post("/create",AdminAuthorization,uploadfile.single("image"),createPost);
postRoute.put("/update/:id",AdminAuthorization,uploadfile.single("image"),updatePost);
postRoute.delete("/delete/:id",AdminAuthorization,uploadfile.single("image"),deletePost);
postRoute.get("/posts",retrievePosts);
postRoute.get("/one/:id",retrievePost);
postRoute.get("/adminPosts/",AdminAuthorization,getAdminPosts);

export default postRoute;
