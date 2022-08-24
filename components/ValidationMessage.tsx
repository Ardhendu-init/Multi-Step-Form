import { ErrorMessage } from "formik";
import { Box, Text } from "@chakra-ui/react";
interface Props {
  name: string;
}

export const ValidationMessage: React.FC<Props> = ({ name }) => {
  return (
    <Text color="red" fontSize="13px" fontWeight="400">
      <ErrorMessage name={name} />
    </Text>
  );
};
