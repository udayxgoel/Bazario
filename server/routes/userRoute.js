import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  products,
} from "../controllers/userController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
