import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PageContext } from "../forms/MainForm";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import FormInputLabel from "./FormInputLabel";

const InterviewDetails = () => {
  const pageContext = useContext(PageContext);
  const InterviewSchema = Yup.object({
    interviewMode: Yup.string().required(" Interview mode  is required "),
    interviewDuration: Yup.string().required("Duration is required"),
    interviewLanguage: Yup.string().required(" Interview Language is required"),
  });

  const formik = useFormik({
    initialValues: {
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    },
    validationSchema: InterviewSchema,
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
          id="interviewMode"
          type="text"
          name="interviewMode"
          value={formik.values.interviewMode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />

        {formik.touched.interviewMode && formik.errors.interviewMode ? (
          <div>{formik.errors.interviewMode}</div>
        ) : null}
        <FormInputLabel name="Job Description" />
        <Input
          id="interviewDuration"
          type="text"
          name="interviewDuration"
          value={formik.values.interviewDuration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.interviewDuration && formik.errors.interviewDuration ? (
          <div>{formik.errors.interviewDuration}</div>
        ) : null}
        <FormInputLabel name="Job Location" />
        <Input
          id="interviewLanguage"
          type="text"
          name="interviewLanguage"
          value={formik.values.interviewLanguage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          mb="16px"
          h="49px"
          borderRadius="7px"
          bgColor="brand.800"
          variant="filled"
        />
        {formik.touched.interviewLanguage && formik.errors.interviewLanguage ? (
          <div>{formik.errors.interviewLanguage}</div>
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

export default InterviewDetails;
