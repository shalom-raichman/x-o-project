import { Router } from "express";
import {
  handleProfileRequest,
  handleSignupRequset,
} from "../routes/usersRoute";
import verifyUser from "../middlewares/verifyUser";

const router: Router = Router();

router.post("/signup", handleSignupRequset);

router.get("/profile", verifyUser, handleProfileRequest);

export default router;
