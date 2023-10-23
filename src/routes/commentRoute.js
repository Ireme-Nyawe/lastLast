import express from "express";
import Authorization from "../middleware/authenticate";
import uploadfile from "../helper/multer";
import { commenting, getAllComments } from "../controller/commentController";
import AdminAuthorization from "../middleware/authenticate";

const routeComment = express.Router();

//set endpoints

routeComment.post("/comment/:id",Authorization,uploadfile.single("profile"),commenting);
routeComment.get("/comments/",getAllComments);

export default routeComment;
