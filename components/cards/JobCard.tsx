import React from "react";
import { valueProps } from "../../model";
import { Box, Flex, Text } from "@chakra-ui/react";
interface interviewProps {
  value: valueProps;
}
const JobCard = ({ value }: interviewProps) => {
  return (
    <Flex
      w="392px"
      mt="28px"
      bgColor="brand.800"
      borderRadius="1px solid rgba(0, 0, 0, 0.04)"
      flexDir="column"
      ml="26px"
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
        <Flex flexDir="column">
          <Text
            fontWeight="300"
            fontSize="10px"
            letterSpacing="0.05em"
            textTransform="uppercase"
            color="brand.500"
            lineHeight="14px"
          >
            Job Title
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
          >
            {value.jobTitle}
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            fontWeight="300"
            fontSize="10px"
            letterSpacing="0.05em"
            textTransform="uppercase"
            color="brand.500"
            lineHeight="14px"
          >
            Job Description
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
          >
            {value.jobDescription}
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Text
            fontWeight="300"
            fontSize="10px"
            letterSpacing="0.05em"
            textTransform="uppercase"
            color="brand.500"
            lineHeight="14px"
          >
            Job Location
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
          >
            {value.jobLocation}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JobCard;
