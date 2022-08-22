import { ErrorMessage } from "formik";
import { Box } from "@chakra-ui/react";
interface Props {
  name: string;
}

export const ValidationMessage: React.FC<Props> = ({ name }) => {
  return (
    <Box color="red">
      <ErrorMessage name={name} />
    </Box>
  );
};
