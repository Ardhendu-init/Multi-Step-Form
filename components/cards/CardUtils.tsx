import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface cardProps {
  name: string;
  value: string;
}
const CardUtils = ({ name, value }: cardProps) => {
  return (
    <Flex flexDir="column">
      <Text
        fontWeight="300"
        fontSize="10px"
        letterSpacing="0.05em"
        textTransform="uppercase"
        color="brand.500"
        lineHeight="14px"
      >
        {name}
      </Text>
      <Text
        fontWeight="600"
        fontStyle="italic"
        fontSize="13px"
        letterSpacing="0.05em"
        textTransform="capitalize"
        color="brand.500"
        lineHeight="18px"
        pb="29px"
        pr="15px"
      >
        {value}
      </Text>
    </Flex>
  );
};

export default CardUtils;
