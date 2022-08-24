import React from "react";
import { valueProps } from "../../model";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hook";
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
        <Flex flexDir="column">
          <Text
            fontWeight="300"
            fontSize="10px"
            letterSpacing="0.05em"
            textTransform="uppercase"
            color="brand.500"
            lineHeight="14px"
          >
            Interview Mode
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
            {data.interviewMode}
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
            Interview Duration
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
            {data.interviewDuration}
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
            Interview Language
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
            {data.interviewLanguage}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InterviewCard;
