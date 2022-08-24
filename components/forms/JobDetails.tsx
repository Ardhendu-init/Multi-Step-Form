import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PageContext } from "../forms/MainForm";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import FormInputLabel from "./FormInputLabel";

const JobDetails = () => {
  const pageContext = useContext(PageContext);
  const JobSchema = Yup.object({
    jobTitle: Yup.string().required(" Job Title is required "),
    jobDescription: Yup.string().required("Job Description is required"),
    jobLocation: Yup.string().required("Location  name  is required"),
  });
  const data = pageContext?.data;
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobDescription: "",
      jobLocation: "",
    },
    validationSchema: JobSchema,
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
        <FormInputLabel name="Job Title" />
        <Input
          id="jobTitle"
          type="text"
          name="jobTitle"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />

        {formik.touched.jobTitle && formik.errors.jobTitle ? (
          <div>{formik.errors.jobTitle}</div>
        ) : null}
        <FormInputLabel name="Job Description" />
        <Input
          id="jobDescription"
          type="text"
          name="jobDescription"
          value={formik.values.jobDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.jobDescription && formik.errors.jobDescription ? (
          <div>{formik.errors.jobDescription}</div>
        ) : null}
        <FormInputLabel name="Job Location" />
        <Input
          id="jobLocation"
          type="text"
          name="jobLocation"
          value={formik.values.jobLocation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.jobLocation && formik.errors.jobLocation ? (
          <div>{formik.errors.jobLocation}</div>
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
          onClick={() => pageContext?.handlePrev()}
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

export default JobDetails;
