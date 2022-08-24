import React, { useContext, useEffect } from "react";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { PageContext } from "../forms/MainForm";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import FormInputLabel from "./FormInputLabel";
const RequsitionDetails = () => {
  const pageContext = useContext(PageContext);
  const data = pageContext?.data;
  const RegistrationSchema = Yup.object({
    title: Yup.string().required("Title is required "),
    owner: Yup.string().required("Owner name  is required"),
    hiringManger: Yup.string().required("Hiring manager name  is required"),
    openings: Yup.string().required("Please mentioned number of Openings "),
    urgency: Yup.string().required("Urgency is required"),
    employmentType: Yup.string().required("Employment type is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      owner: "",
      hiringManger: "",
      openings: "",
      urgency: "",
      employmentType: "",
      jobTitle: "",
      jobDescription: "",
      jobLocation: "",
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      pageContext?.handleNext();
    },
  });
  useEffect(() => {
    pageContext?.getData(formik.values);
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormInputLabel name="Requisite Title" />
        <Input
          id="title"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />

        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <FormInputLabel name="Owner" />
        <Input
          id="owner"
          type="text"
          name="owner"
          value={formik.values.owner}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.owner && formik.errors.owner ? (
          <div>{formik.errors.owner}</div>
        ) : null}
        <FormInputLabel name="Hiring Manager" />
        <Input
          id="hiringManger"
          type="text"
          name="hiringManger"
          value={formik.values.hiringManger}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.hiringManger && formik.errors.hiringManger ? (
          <div>{formik.errors.hiringManger}</div>
        ) : null}
        <FormInputLabel name="Hiring Manager" />
        <Input
          id="openings"
          type="text"
          name="openings"
          value={formik.values.openings}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.openings && formik.errors.openings ? (
          <div>{formik.errors.openings}</div>
        ) : null}
        <FormInputLabel name="Urgency" />
        <Input
          id="urgency"
          type="text"
          name="urgency"
          value={formik.values.urgency}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.urgency && formik.errors.urgency ? (
          <div>{formik.errors.urgency}</div>
        ) : null}
        <FormInputLabel name="Employment Type" />
        <Input
          id="employmentType"
          type="text"
          name="employmentType"
          value={formik.values.employmentType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.employmentType && formik.errors.employmentType ? (
          <div>{formik.errors.employmentType}</div>
        ) : null}
      </FormControl>
      <Flex mt="78px" ml="395px">
        <Button
          w="143px"
          h="38px"
          borderRadius="5px"
          color="brand.800"
          bgColor="brand.400"
          fontSize="12px"
          fontWeight="500"
          lineHeight="17px"
          letterSpacing="0.01em"
          variant="unstyled"
        >
          Previous
        </Button>
        <Button
          w="143px"
          h="38px"
          borderRadius="5px"
          ml="15px"
          color="brand.800"
          bgColor="brand.600"
          fontSize="12px"
          fontWeight="500"
          lineHeight="17px"
          letterSpacing="0.01em"
          type="submit"
          variant="unstyled"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default RequsitionDetails;
