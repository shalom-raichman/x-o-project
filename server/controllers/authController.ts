import { Router } from "express";
import { handleSigninRequset } from "../routes/authRoute";
import { handleSignupRequset } from "../routes/usersRoute"

const router: Router = Router();

router.post("/register", handleSignupRequset);

router.post("/login", handleSigninRequset);

// router.get("/profile", verifyUser, handleProfileRequest);

export default router;
