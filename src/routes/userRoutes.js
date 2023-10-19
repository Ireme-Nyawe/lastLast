import express from "express";
import { createAccount, signIn } from "../controller/userController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";

const routeUser = express.Router();

routeUser.post("/signUp",uploadfile.single("profile"),createAccount);
routeUser.post("/signIn",uploadfile.single("profile"),signIn);

export default routeUser;