import express from "express";
import { GetOneUser, createAccount, deleteUser, getAllUsers, signIn, updateUser } from "../controller/userController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";

const routeUser = express.Router();

routeUser.post("/signUp",uploadfile.single("profile"),createAccount);
routeUser.post("/signIn",uploadfile.single("profile"),signIn);
routeUser.post("/update",uploadfile.single("profile"),updateUser);
routeUser.post("/getAllUsers",uploadfile.single("profile"),getAllUsers);
routeUser.post("/getOneUser",uploadfile.single("profile"),GetOneUser);
routeUser.post("/delete",uploadfile.single("profile"),deleteUser);

export default routeUser;