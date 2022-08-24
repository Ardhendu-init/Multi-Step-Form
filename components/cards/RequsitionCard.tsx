import React from "react";
import { valueProps } from "../../model";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hook";

const RequsitionCard = () => {
  const data = useAppSelector((state) => state.details);

  return (
    <Flex flexDir="column" mt="72px" ml="26px" mb="21px">
      <Flex
        width="391px"
        h="63px"
        bgColor="brand.500"
        borderRadius="7px"
        boxShadow="0px 34px 54px -20px rgba(128, 135, 164, 0.53)"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          ml="21px"
          fontWeight="600"
          fontSize="15px"
          lineHeight="20px"
          textTransform="capitalize"
          color="brand.800"
        >
          {data.title}
        </Text>
        <Flex alignItems="center">
          {" "}
          <Text
            mr="6px"
            fontWeight="300"
            fontSize="10px"
            lineHeight="14px"
            textTransform="uppercase"
            letterSpacing="0.05em"
            color="brand.800"
          >
            OPENINGS{" "}
          </Text>
          <Text
            mr="21px"
            fontWeight="600"
            fontSize="15px"
            lineHeight="20px"
            letterSpacing="0.05em"
            color="brand.800"
          >
            {data.openings}
          </Text>
        </Flex>
      </Flex>
      <Flex
        w="392px"
        mt="28px"
        bgColor="brand.800"
        borderRadius="1px solid rgba(0, 0, 0, 0.04)"
        flexDir="column"
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
          Requsition Details
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
              owner
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
              {data.owner}
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
              Urgency
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
              {data.urgency}
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
              Employment Type
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
              {data.employmentType}
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
              Hiring Managaer
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
              {data.hiringManger}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RequsitionCard;
