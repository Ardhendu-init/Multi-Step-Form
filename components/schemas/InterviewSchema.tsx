import * as Yup from "yup";

export const InterviewSchema = Yup.object().shape({
  interviewMode: Yup.string().required(" Interview mode  is required "),
  interviewDuration: Yup.string().required("Duration is required"),
  interviewLanguage: Yup.string().required(" Interview Language is required"),
});
const initialValues = {
  interviewMode: "",
  interviewDuration: "",
  interviewLanguage: "",
};
