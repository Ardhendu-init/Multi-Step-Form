import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { PageContext } from "../../Provider/PageContextProvider";
import { useAppSelector } from "../../../app/hook";
interface btnProps {
  name: string;
}
const PrevButton = ({ name }: btnProps) => {
  const pageContext = useContext(PageContext);
  const data = useAppSelector((state) => state.details);
  return (
    <Button
      w="143px"
      h="38px"
      borderRadius="5px"
      ml="15px"
      color="brand.800"
      bgColor="brand.400"
      fontSize="12px"
      fontWeight="500"
      lineHeight="17px"
      letterSpacing="0.01em"
      variant="unstyled"
      onClick={() => pageContext?.handlePrev(data)}
    >
      {name}
    </Button>
  );
};
const NextButton = ({ name }: btnProps) => {
  return (
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
      variant="unstyled"
      type="submit"
    >
      {name}
    </Button>
  );
};

export { PrevButton, NextButton };
