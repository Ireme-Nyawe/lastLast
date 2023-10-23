import express from "express";
import { GetOneUser, createAccount, deleteUser, getAllUsers, signIn, updateUser } from "../controller/userController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";

const routeUser = express.Router();

routeUser.post("/signUp",uploadfile.single("profile"),createAccount);
routeUser.post("/signIn",uploadfile.single("profile"),signIn);
routeUser.put("/update/:id",uploadfile.single("profile"),updateUser);
routeUser.get("/getAllUsers",uploadfile.single("profile"),getAllUsers);
routeUser.get("/getOneUser/:id",uploadfile.single("profile"),GetOneUser);
routeUser.delete("/delete/:id",uploadfile.single("profile"),deleteUser);

export default routeUser;