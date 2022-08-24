import { Formik, Form, FormikHelpers } from "formik";
import { JobSchema } from "../schemas/JobSchema";
import { ValidationMessage } from "../ValidationMessage";
import { FormControl, Flex, Button, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PageContext } from "../forms/MainForm";

import FormInputLabel from "./FormInputLabel";

import { valueProps } from "../../model";
interface dataProps {
  data: valueProps;
}

const JobDetails = ({ data }: dataProps) => {
  const pageContext = useContext(PageContext);

  const handleSubmit = async (values: valueProps) => {
    pageContext?.handleNext(values);
  };
  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={JobSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <>
            <Form>
              <FormControl>
                <FormInputLabel name="Job Title" />
                <Input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                  {...pageContext?.setData(values)}
                />
                <ValidationMessage name="jobTitle" />

                <FormInputLabel name="Job Description" />
                <Input
                  id="jobDescription"
                  type="text"
                  name="jobDescription"
                  value={values.jobDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="jobDescription" />
                <FormInputLabel name="Job Location" />
                <Input
                  id="jobLocation"
                  type="text"
                  name="jobLocation"
                  value={values.jobLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="jobLocation" />
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
                  onClick={() => pageContext?.handlePrev(values)}
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
                  Next
                </Button>
              </Flex>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default JobDetails;
