import express from "express";
import Authorization from "../middleware/authenticate";
import uploadfile from "../helper/multer";
import { commenting } from "../controller/commentController";

const routeComment = express.Router();

//set endpoints

routeComment.post("/comment/:id",Authorization,uploadfile.single("profile"),commenting);

export default routeComment;
