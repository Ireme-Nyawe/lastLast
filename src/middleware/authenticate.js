import userModel from "../models/userModel";
import Jwt from "jsonwebtoken";
const AdminAuthorization = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(404).json({
        status: "404",
        message: "This Operation require login,  Please login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const logedUser = await userModel.findById(decoded.id);

    if (!logedUser) {
      res.status(403).json({
        status: "403",
        message: "Token has Expired Please login Again",
      });
    }

    if (logedUser.role !== "admin") {
      res.status(404).json({
        status: "404",
        message: "Only Admin Can Do This Operation",
      });
    } else {
      req.userModel = logedUser;
      next();
    }

  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

export default AdminAuthorization;