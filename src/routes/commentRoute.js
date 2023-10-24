import express from "express";
import uploadfile from "../helper/multer";
import { commenting, getAllComments } from "../controller/commentController";

import Authorization from "../middleware/authenticateUser";
import AdminAuthorization from "../middleware/authenticate";

const routeComment = express.Router();

//set endpoints

routeComment.post("/comment/:id",Authorization,uploadfile.single("profile"),commenting);
routeComment.get("/comments/",AdminAuthorization,getAllComments);

export default routeComment;
