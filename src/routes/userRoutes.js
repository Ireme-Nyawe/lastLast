import express from "express";
import { GetOneUser, createAccount, deleteUser, getAllUsers, signIn, updateUser } from "../controller/userController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authenticate";
import AdminAuthorization from "../middleware/authenticate";

const routeUser = express.Router();

routeUser.post("/signUp",uploadfile.single("profile"),createAccount);
routeUser.post("/signIn",uploadfile.single("profile"),signIn);
routeUser.put("/update/:id",Authorization,uploadfile.single("profile"),updateUser);
routeUser.get("/getAllUsers",AdminAuthorization,uploadfile.single("profile"),getAllUsers);
routeUser.get("/getOneUser/:id",AdminAuthorization,uploadfile.single("profile"),GetOneUser);
routeUser.delete("/delete/:id",AdminAuthorization,uploadfile.single("profile"),deleteUser);

export default routeUser;