import express from "express";
import { protectedRoute } from "../middleware/auth.middlware.js";
const router = express.Router();
import {
  getUserForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

router.get("/users", protectedRoute, getUserForSidebar);
router.get("/:id", protectedRoute, getMessages);

router.post("/send/:id", protectedRoute, sendMessage);
export default router;
