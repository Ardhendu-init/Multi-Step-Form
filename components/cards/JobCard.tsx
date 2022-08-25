import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hook";
import CardUtils from "./CardUtils";
const JobCard = () => {
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
        Job Details
      </Text>
      <Flex
        flexWrap="wrap"
        ml="17"
        justifyContent="space-between"
        mr="16px"
        mt="29px"
      >
        <CardUtils name="Job Title " value={data.jobTitle} />
        <CardUtils name="Job Description " value={data.jobDescription} />
        <CardUtils name="Job Title " value={data.jobLocation} />
      </Flex>
    </Flex>
  );
};

export default JobCard;
