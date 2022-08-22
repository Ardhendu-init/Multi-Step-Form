import { Formik, Form, FormikHelpers } from "formik";
import { InterviewSchema } from "../schemas/InterviewSchema";
import { ValidationMessage } from "../ValidationMessage";
import React, { useContext, useRef } from "react";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { PageContext } from "../../pages";
import { valueProps } from "../../model";
interface dataProps {
  data: valueProps;
}
const InterviewDetails = ({ data }: dataProps) => {
  const pageContext = useContext(PageContext);

  const handleSubmit = async (values: valueProps) => {
    pageContext?.handleNext(values);
  };

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={InterviewSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <FormControl>
              <FormLabel>Interview Mode</FormLabel>
              <Input
                id="interviewMode"
                type="text"
                name="interviewMode"
                value={values.interviewMode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="interviewMode" />
              <FormLabel>Interview Duration</FormLabel>
              <Input
                id="interviewDuration"
                type="text"
                name="interviewDuration"
                value={values.interviewDuration}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="interviewDuration" />
              <FormLabel>Interview Language </FormLabel>
              <Input
                id="interviewLanguage"
                type="text"
                name="interviewLanguage"
                value={values.interviewLanguage}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="interviewLanguage" />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => pageContext?.handlePrev(values)}
            >
              Previous
            </Button>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InterviewDetails;
