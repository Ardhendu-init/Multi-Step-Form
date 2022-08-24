import { Formik, Form } from "formik";
import { InterviewSchema } from "../schemas/InterviewSchema";
import { ValidationMessage } from "../ValidationMessage";
import React, { useContext } from "react";
import { FormControl, Flex, Button, Input, Box } from "@chakra-ui/react";
import { PageContext } from "../forms/MainForm";
import { valueProps } from "../../model";
import FormInputLabel from "./FormInputLabel";
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
          <>
            <Form>
              <FormControl>
                <FormInputLabel name="Interview Mode" />
                <Input
                  id="interviewMode"
                  type="text"
                  name="interviewMode"
                  value={values.interviewMode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  {...pageContext?.setData(values)}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="interviewMode" />
                <FormInputLabel name="Interview Duration" />
                <Input
                  id="interviewDuration"
                  type="text"
                  name="interviewDuration"
                  value={values.interviewDuration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="interviewDuration" />
                <FormInputLabel name="Interview Language" />
                <Input
                  id="interviewLanguage"
                  type="text"
                  name="interviewLanguage"
                  value={values.interviewLanguage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="interviewLanguage" />
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
                  Submit
                </Button>
              </Flex>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default InterviewDetails;
