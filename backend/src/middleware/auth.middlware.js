import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectedRoute = async (req, res, next) => {
  try {
    //   getting token from the req body
    const token = req.cookies.jwt;

    // validating the token
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized, No Token Provided" });
    }
    // decoding the token, validating
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // checking the validating token if not exist
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectedRoute middleware:", error.message);
    return res.status(500).json({ message: "Error in protected middleware" });
  }
};
