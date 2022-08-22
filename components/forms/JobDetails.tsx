import { Formik, Form, FormikHelpers } from "formik";
import { JobSchema } from "../schemas/JobSchema";
import { ValidationMessage } from "../ValidationMessage";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import React, { SetStateAction, Dispatch, useContext } from "react";
import { PageContext } from "../../pages";

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
          <Form>
            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input
                id="jobTitle"
                type="text"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="jobTitle" />
              <FormLabel>Job Description</FormLabel>
              <Input
                id="jobDescription"
                type="text"
                name="jobDescription"
                value={values.jobDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="jobDescription" />
              <FormLabel>Job Location</FormLabel>
              <Input
                id="jobLocation"
                type="text"
                name="jobLocation"
                value={values.jobLocation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="jobLocation" />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => pageContext?.handlePrev(values)}
            >
              Previous
            </Button>
            <Button mt={4} colorScheme="teal" type="submit">
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default JobDetails;
