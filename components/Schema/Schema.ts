import * as Yup from "yup";

const RegistrationSchema = Yup.object({
  title: Yup.string().required("Title is required "),
  owner: Yup.string().required("Owner name  is required"),
  hiringManger: Yup.string().required("Hiring manager name  is required"),
  openings: Yup.string().required("Please mentioned number of Openings "),
  urgency: Yup.string().required("Urgency is required"),
  employmentType: Yup.string().required("Employment type is required"),
});

const JobSchema = Yup.object({
  jobTitle: Yup.string().required(" Job Title is required "),
  jobDescription: Yup.string().required("Job Description is required"),
  jobLocation: Yup.string().required("Location  name  is required"),
});

const InterviewSchema = Yup.object({
  interviewMode: Yup.string().required(" Interview mode  is required "),
  interviewDuration: Yup.string().required("Duration is required"),
  interviewLanguage: Yup.string().required(" Interview Language is required"),
});

export { RegistrationSchema, JobSchema,InterviewSchema };
