import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { JobSchema } from "../Schema/Schema";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { add } from "../../app/feature/details/detailsSlice";
import { PageContext } from "../Provider/PageContextProvider";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import { PrevButton, NextButton } from "./fromsUtil/FormButton";
import InputField from "./fromsUtil/InputField";
const JobDetails = () => {
  const pageContext = useContext(PageContext);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.details);

  const formik = useFormik({
    initialValues: data,

    validationSchema: JobSchema,
    onSubmit: (values) => {
      pageContext?.handleNext(data);
    },
  });
  useEffect(() => {
    dispatch(add(formik.values));
  }, [formik.values]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputField label="Job Title " {...formik.getFieldProps("jobTitle")} />

        {formik.touched.jobTitle && formik.errors.jobTitle ? (
          <Box color="red" fontSize="13px">
            {formik.errors.jobTitle}
          </Box>
        ) : null}
        <InputField
          label="Job Description "
          {...formik.getFieldProps("jobDescription")}
        />
        {formik.touched.jobDescription && formik.errors.jobDescription ? (
          <Box color="red" fontSize="13px">
            {formik.errors.jobDescription}
          </Box>
        ) : null}
        <InputField
          label="Job Location "
          {...formik.getFieldProps("jobLocation")}
        />
        {formik.touched.jobLocation && formik.errors.jobLocation ? (
          <Box color="red" fontSize="13px">
            {formik.errors.jobLocation}
          </Box>
        ) : null}
      </FormControl>
      <Flex mt="78px" ml="395px">
        <PrevButton name="Previous" />
        <NextButton name="Next" />
      </Flex>
    </form>
  );
};

export default JobDetails;
