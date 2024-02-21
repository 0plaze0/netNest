import Router from "express";
import authController from "../controllers/authController.js";

const router = Router();

router.route("/").post(authController.register);

export default router;
