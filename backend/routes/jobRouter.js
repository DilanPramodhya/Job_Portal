import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { deleteJob, getAllJobs, getASingleJob, getMyJobs, postJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/postJob", isAuthenticated, isAuthorized("Employer"), postJob);
router.get("/getAll", getAllJobs);
router.get("/getMyJobs", isAuthenticated, isAuthorized("Employer"), getMyJobs);
router.delete("/delete/:id", isAuthenticated, isAuthorized("Employer"), deleteJob);
router.get("/get/:id", isAuthenticated, isAuthorized("Employer"), getASingleJob);

export default router;
