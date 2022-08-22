import { Formik, Form, FormikHelpers } from "formik";
import { RegistrationSchema } from "../schemas/RegistrationSchema";
import { useContext } from "react";
import { PageContext } from "../../pages";
import { ValidationMessage } from "../ValidationMessage";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Select,
  Box,
} from "@chakra-ui/react";

import { valueProps } from "../../model";
interface dataProps {
  data: valueProps;
}

const RequsitionDetails = ({ data }: dataProps) => {
  const pageContext = useContext(PageContext);
  const handleSubmit = async (values: valueProps) => {
    pageContext?.handleNext(values);
  };
  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <FormControl>
              <FormLabel>Request Title</FormLabel>
              <Input
                id="title"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="title" />

              <FormLabel>Owner</FormLabel>
              <Input
                id="owner"
                type="text"
                name="owner"
                value={values.owner}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="owner" />
              <FormLabel>Hiring Manager</FormLabel>
              <Input
                id="hiringManger"
                type="text"
                name="hiringManger"
                value={values.hiringManger}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="hiringManger" />
              <FormLabel>Number of openings</FormLabel>
              <Input
                id="openings"
                type="text"
                name="openings"
                value={values.openings}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="openings" />
              <FormLabel>Urgency</FormLabel>
              <Select
                id="urgency"
                name="urgency"
                value={values.urgency}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select Urgency"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Select>
              <ValidationMessage name="urgency" />
              <FormLabel>Employment Type</FormLabel>
              <Input
                id="employmentType"
                type="text"
                name="employmentType"
                value={values.employmentType}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationMessage name="employmentType" />
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

export default RequsitionDetails;
