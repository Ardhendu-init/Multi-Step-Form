import React from "react";
import { FormLabel, Input } from "@chakra-ui/react";

interface inputProps {
  name: string;
}

const FormInputLabel = ({ name }: inputProps) => {
  return (
    <FormLabel
      ml="3px"
      fontWeight="400"
      color="brand.400"
      fontSize="13px"
      lineHeight="19px"
      letterSpacing="0.01em"
    >
      {name}
    </FormLabel>
  );
};

export default FormInputLabel;
