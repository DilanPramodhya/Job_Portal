import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { postJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/postJob", isAuthenticated, isAuthorized("Employer"), postJob);

export default router;
