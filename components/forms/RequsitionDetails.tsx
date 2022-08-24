import { Formik, Form } from "formik";
import { RegistrationSchema } from "../schemas/RegistrationSchema";
import React, { useContext, useState } from "react";
import { PageContext } from "../forms/MainForm";
import { ValidationMessage } from "../ValidationMessage";
import FormInputLabel from "./FormInputLabel";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { FormControl, Button, Input, Box, Flex } from "@chakra-ui/react";
import { addTitle } from "../../app/feature/details/detailsSlice";
import { valueProps } from "../../model";
interface dataProps {
  data: valueProps;
}

const RequsitionDetails = ({ data }: dataProps) => {
  const pageContext = useContext(PageContext);
  // const d = useAppSelector((state) => state.details);
  // console.log(d);
  // const dispatch = useAppDispatch();
  // const updateValFromStore = (val: string) => {
  //   dispatch(addTitle(val));
  // };

  const handleSubmit = async (values: valueProps) => {
    pageContext?.handleNext(values);
  };
  // interface changeProps {
  //   e: React.FormEvent;
  //   val: string;
  // }

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <>
            <Form>
              <FormControl>
                <FormInputLabel name=" Request Title" />
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={values.title}
                  // onChange={(e: React.FormEvent) => {
                  //   updateValFromStore(values.title);
                  //   handleChange(e);
                  // }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  {...pageContext?.setData(values)}
                  mb="16px"
                  h="49px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="title" />
                <FormInputLabel name="Owner" />
                <Input
                  id="owner"
                  type="text"
                  name="owner"
                  value={values.owner}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  h="49px"
                  mb="16px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="owner" />
                <FormInputLabel name="Hiring Manager" />
                <Input
                  id="hiringManger"
                  type="text"
                  name="hiringManger"
                  value={values.hiringManger}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  h="49px"
                  mb="16px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="hiringManger" />
                <FormInputLabel name="Number Of Openings" />
                <Input
                  id="openings"
                  type="text"
                  name="openings"
                  value={values.openings}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  h="49px"
                  mb="16px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="openings" />
                <FormInputLabel name="Urgency" />
                <Input
                  id="urgency"
                  name="urgency"
                  value={values.urgency}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  h="49px"
                  mb="16px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                ></Input>
                <ValidationMessage name="urgency" />
                <FormInputLabel name="Employment Type " />
                <Input
                  id="employmentType"
                  type="text"
                  name="employmentType"
                  value={values.employmentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  h="49px"
                  mb="16px"
                  borderRadius="7px"
                  bgColor="brand.800"
                  variant="filled"
                />
                <ValidationMessage name="employmentType" />
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

export default RequsitionDetails;
