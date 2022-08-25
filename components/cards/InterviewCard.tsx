import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hook";
import CardUtils from "./CardUtils";
const InterviewCard = () => {
  const data = useAppSelector((state) => state.details);
  return (
    <Flex
      w="392px"
      mt="28px"
      bgColor="brand.800"
      borderRadius="1px solid rgba(0, 0, 0, 0.04)"
      flexDir="column"
      ml="26px"
      mb="21px"
    >
      <Text
        ml="17"
        mt="23"
        color="brand.500"
        fontWeight="600"
        fontSize="13px"
        lineHeight="18px"
        textTransform="uppercase"
        letterSpacing="0.05em"
      >
        Interview Settings
      </Text>
      <Flex
        flexWrap="wrap"
        ml="17"
        justifyContent="space-between"
        mr="16px"
        mt="29px"
      >
        <CardUtils name="Interview Mode" value={data.interviewMode} />
        <CardUtils name="Interview Duration " value={data.interviewDuration} />
        <CardUtils name="Interview Language" value={data.interviewLanguage} />
      </Flex>
    </Flex>
  );
};

export default InterviewCard;
