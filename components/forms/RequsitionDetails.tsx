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
          meta={formik.getFieldMeta("title")}
          {...formik.getFieldProps("title")}
        />

        <InputField
          label="Owner"
          meta={formik.getFieldMeta("owner")}
          {...formik.getFieldProps("owner")}
        />

        <InputField
          label="Hiring Manager"
          meta={formik.getFieldMeta("hiringManger")}
          {...formik.getFieldProps("hiringManger")}
        />

        <InputField
          label="Openings"
          meta={formik.getFieldMeta("openings")}
          {...formik.getFieldProps("openings")}
        />

        <InputField
          label="Urgency"
          meta={formik.getFieldMeta("urgency")}
          {...formik.getFieldProps("urgency")}
        />

        <InputField
          label="Employment Type"
          meta={formik.getFieldMeta("employmentType")}
          {...formik.getFieldProps("employmentType")}
        />
      </FormControl>
      <Flex mt="78px" ml="395px">
        <PrevButton name="Previous" />
        <NextButton name="Next" />
      </Flex>
    </form>
  );
};

export default RequsitionDetails;
