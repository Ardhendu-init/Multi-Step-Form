import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { add } from "../../app/feature/details/detailsSlice";
import { PageContext } from "../forms/MainForm";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import FormInputLabel from "./FormInputLabel";

const InterviewDetails = () => {
  const pageContext = useContext(PageContext);
  const data = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();
  const InterviewSchema = Yup.object({
    interviewMode: Yup.string().required(" Interview mode  is required "),
    interviewDuration: Yup.string().required("Duration is required"),
    interviewLanguage: Yup.string().required(" Interview Language is required"),
  });

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
        <FormInputLabel name="Interview Mode" />
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
          <Box color="red" fontSize="13px">
            {formik.errors.interviewMode}
          </Box>
        ) : null}
        <FormInputLabel name="Interview Duration" />
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
          <Box color="red" fontSize="13px">
            {formik.errors.interviewDuration}
          </Box>
        ) : null}
        <FormInputLabel name="Interview Language" />
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
          <Box color="red" fontSize="13px">
            {formik.errors.interviewLanguage}
          </Box>
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
          onClick={() => pageContext?.handlePrev(data)}
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
