import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Backend is working!");
});

router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, myProfile);
router.post("/register", register);

export default router;
