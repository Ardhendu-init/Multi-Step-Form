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
          label="Interview Mode "
          meta={formik.getFieldMeta("interviewMode")}
          {...formik.getFieldProps("interviewMode")}
        />

        <InputField
          label="Interview Duration "
          meta={formik.getFieldMeta("interviewDuration")}
          {...formik.getFieldProps("interviewDuration")}
        />

        <InputField
          label="Interview Language "
          meta={formik.getFieldMeta("interviewLanguage")}
          {...formik.getFieldProps("interviewLanguage")}
        />
      </FormControl>
      <Flex mt="78px" ml="395px">
        <PrevButton name="Previous" />
        <NextButton name="Submit" />
      </Flex>
    </form>
  );
};

export default InterviewDetails;
