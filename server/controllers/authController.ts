import { Router } from "express";
import { handleSigninRequset } from "../routes/authRoute";

const router: Router = Router();

router.post("/register", handleSigninRequset);

router.post("/login", handleSigninRequset);

// router.get("/profile", verifyUser, handleProfileRequest);

export default router;
