import Router from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router
  .route("/test")
  .get(
    authMiddleware.requireSignIn,
    authMiddleware.isAdmin,
    authController.test
  );

export default router;
