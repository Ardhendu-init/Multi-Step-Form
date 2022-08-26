import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Input, FormLabel, Box } from "@chakra-ui/react";
import { FieldProps, FieldAttributes, useField } from "formik";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = ({
  label,

  meta,
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
      />
      {meta.touched && meta.error ? (
        <Box color="red" fontSize="13px">
          {meta.error}
        </Box>
      ) : null}
    </>
  );
};

export default InputField;
