import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Input, FormLabel } from "@chakra-ui/react";
import { FieldProps, FieldAttributes } from "formik";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = ({
  label,
  Field,
  ...props
}: FieldProps & InputProps & FieldAttributes<any>) => {
  return (
    <>
      <FormLabel
        ml="3px"
        fontWeight="400"
        color="brand.400"
        fontSize="13px"
        lineHeight="19px"
        letterSpacing="0.01em"
      >
        {label}
      </FormLabel>
      <Input
        mb="16px"
        h="49px"
        borderRadius="7px"
        bgColor="brand.800"
        variant="filled"
        {...props}
        {...Field}
      />
    </>
  );
};

export default InputField;
