import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { add } from "../../app/feature/details/detailsSlice";
import { PageContext } from "../Provider/PageContextProvider";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import { RegistrationSchema } from "../Schema/Schema";
import InputField from "./fromsUtil/InputField";
import { PrevButton, NextButton } from "./fromsUtil/FormButton";
const RequsitionDetails = () => {
  const pageContext = useContext(PageContext);
  const data = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: data,
    validationSchema: RegistrationSchema,
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
          label="Requisite Title "
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title ? (
          <Box color="red" fontSize="13px">
            {formik.errors.title}
          </Box>
        ) : null}
        <InputField label="Owner" {...formik.getFieldProps("owner")} />
        {formik.touched.owner && formik.errors.owner ? (
          <Box color="red" fontSize="13px">
            {formik.errors.owner}
          </Box>
        ) : null}

        <InputField
          label="Hiring Manager"
          {...formik.getFieldProps("hiringManger")}
        />
        {formik.touched.hiringManger && formik.errors.hiringManger ? (
          <Box color="red" fontSize="13px">
            {formik.errors.hiringManger}
          </Box>
        ) : null}
        <InputField label="Openings" {...formik.getFieldProps("openings")} />
        {formik.touched.openings && formik.errors.openings ? (
          <Box color="red" fontSize="13px">
            {formik.errors.openings}
          </Box>
        ) : null}

        <InputField label="Urgency" {...formik.getFieldProps("urgency")} />
        {formik.touched.urgency && formik.errors.urgency ? (
          <Box color="red" fontSize="13px">
            {formik.errors.urgency}
          </Box>
        ) : null}
        <InputField
          label="Employment Type"
          {...formik.getFieldProps("employmentType")}
        />
        {formik.touched.employmentType && formik.errors.employmentType ? (
          <Box color="red" fontSize="13px">
            {formik.errors.employmentType}
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

export default RequsitionDetails;
