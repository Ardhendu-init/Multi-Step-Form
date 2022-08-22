import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required "),
  owner: Yup.string().required("Owner name  is required"),
  hiringManger: Yup.string().required("Hiring manager name  is required"),
  openings: Yup.string().required("Please mentioned number of Openings "),
  urgency: Yup.string().required("Urgency is required"),
  employmentType: Yup.string().required("Employment type is required"),
});
