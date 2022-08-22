import * as Yup from "yup";

export const JobSchema = Yup.object().shape({
  jobTitle: Yup.string().required(" Job Title is required "),
  jobDescription: Yup.string().required("Job Description is required"),
  jobLocation: Yup.string().required("Location  name  is required"),
});
