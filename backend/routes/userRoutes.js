import express from "express";
import {
  authUser,
  RegisterUser,
  LogoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();


router.post("/auth", authUser);
router.post("/", RegisterUser);
router.post("/logout", LogoutUser);
// router.get("/profile", getUserProfile);
// router.put("/profile", updateUserProfile);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
