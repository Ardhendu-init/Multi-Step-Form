import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { JobSchema } from "../Schema/Schema";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { add } from "../../app/feature/details/detailsSlice";
import { PageContext } from "../Provider/PageContextProvider";
import { FormControl, Flex } from "@chakra-ui/react";
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
      pageContext?.handleNext();
    },
  });
  useEffect(() => {
    dispatch(add(formik.values));
  }, [formik.values]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputField
          label="Job Title "
          meta={formik.getFieldMeta("jobTitle")}
          {...formik.getFieldProps("jobTitle")}
        />

        <InputField
          label="Job Description "
          meta={formik.getFieldMeta("jobDescription")}
          {...formik.getFieldProps("jobDescription")}
        />

        <InputField
          label="Job Location "
          meta={formik.getFieldMeta("jobLocation")}
          {...formik.getFieldProps("jobLocation")}
        />
      </FormControl>
      <Flex mt="78px" ml="395px">
        <PrevButton name="Previous" />
        <NextButton name="Next" />
      </Flex>
    </form>
  );
};

export default JobDetails;
