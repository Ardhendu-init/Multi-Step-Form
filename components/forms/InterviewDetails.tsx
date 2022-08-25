import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { InterviewSchema } from "../Schema/Schema";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { add } from "../../app/feature/details/detailsSlice";
import { PageContext } from "../Provider/PageContextProvider";
import { FormControl, Flex, Box } from "@chakra-ui/react";
import { PrevButton, NextButton } from "./fromsUtil/FormButton";
import InputField from "./fromsUtil/InputField";

const InterviewDetails = () => {
  const pageContext = useContext(PageContext);
  const data = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: data,

    validationSchema: InterviewSchema,
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
        <InputField
          label="Interview Mode "
          {...formik.getFieldProps("interviewMode")}
        />

        {formik.touched.interviewMode && formik.errors.interviewMode ? (
          <Box color="red" fontSize="13px">
            {formik.errors.interviewMode}
          </Box>
        ) : null}

        <InputField
          label="Interview Duration "
          {...formik.getFieldProps("interviewDuration")}
        />
        {formik.touched.interviewDuration && formik.errors.interviewDuration ? (
          <Box color="red" fontSize="13px">
            {formik.errors.interviewDuration}
          </Box>
        ) : null}
        <InputField
          label="Interview Language "
          {...formik.getFieldProps("interviewLanguage")}
        />
        {formik.touched.interviewLanguage && formik.errors.interviewLanguage ? (
          <Box color="red" fontSize="13px">
            {formik.errors.interviewLanguage}
          </Box>
        ) : null}
      </FormControl>
      <Flex mt="78px" ml="395px">
        <PrevButton name="Previous" />
        <NextButton name="Submit" />
      </Flex>
    </form>
  );
};

export default InterviewDetails;
