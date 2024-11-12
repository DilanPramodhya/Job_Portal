import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";

export const postJob = catchAsyncErrors(async (req, res, next) => {
  const {
    title,
    jobType,
    location,
    companyName,
    introduction,
    responsibilities,
    qualifications,
    offers,
    salary,
    hiringMultipleCandidates,
    personalWebSiteTitle,
    personalWebSiteUrl,
    jobNiche,
  } = req.body;

  if (
    !title ||
    !jobType ||
    !location ||
    !companyName ||
    !introduction ||
    !responsibilities ||
    !qualifications ||
    !salary ||
    !jobNiche
  ) {
    return next(new ErrorHandler("Please provide full job details", 400));
  }
  if (
    (personalWebSiteTitle && !personalWebSiteUrl) ||
    (!personalWebSiteTitle && personalWebSiteUrl)
  ) {
    return next(
      new ErrorHandler(
        "Please provide both website url & title, or leave both blank",
        400
      )
    );
  }
  const postedBy = req.user._id;

  const job = await Job.create({
    title,
    jobType,
    location,
    companyName,
    introduction,
    responsibilities,
    qualifications,
    offers,
    salary,
    hiringMultipleCandidates,
    personalWebSite: {
      title: personalWebSiteTitle,
      url: personalWebSiteUrl,
    },
    jobNiche,
    postedBy,
  });
  res.status(201).json({
    success: true,
    message: "Job posted successfully",
    job,
  });
});
