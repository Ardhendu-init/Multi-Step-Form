import React, { useState } from "react";
import RequsitionDetails from "./RequsitionDetails";
import JobDetails from "./JobDetails";
import InterviewDetails from "./InterviewDetails";
import { Text, Box, Flex, Divider } from "@chakra-ui/react";
import { valueProps } from "../../model";
import InterviewCard from "../cards/InterviewCard";
import JobCard from "../cards/JobCard";
import RequsitionCard from "../cards/RequsitionCard";
import { PageContext } from "../Provider/PageContextProvider";
import { useAppDispatch } from "../../app/hook";
import { add, refresh } from "../../app/feature/details/detailsSlice";
const MainForm = () => {
  const [page, setPage] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handlePrev = async (values: valueProps) => {
    await dispatch(add(values));
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = async (values: valueProps) => {
    if (page == 2) {
      setPage(0);
      alert(JSON.stringify(values, null, 2));
      await dispatch(refresh());
    } else {
      setPage((cur) => cur + 1);
      await dispatch(add(values));
    }
  };

  return (
    <PageContext.Provider value={{ handlePrev, handleNext }}>
      <Box bgColor="brand.200" height="1024px">
        <Text
          position="absolute"
          left="128px"
          top="40px"
          width="382px"
          h="30px"
          fontSize="24px"
          fontWeight="700"
          lineHeight="30px"
          letterSpacing="0.02em"
          textTransform="capitalize"
        >
          Create Candidate Requsition
        </Text>
        <Flex
          alignItems="center"
          position="absolute"
          top="93"
          bottom="88.77%"
          left="147"
        >
          <Text
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
          >
            Requsition Details{" "}
          </Text>
          <Text
            ml="89px"
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
          >
            Job Details{" "}
          </Text>
          <Text
            ml="89px"
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
          >
            Interview Settings{" "}
          </Text>
        </Flex>
        <Divider
          pos="absolute"
          w="1192px"
          left="124px"
          top="139px"
          border="1px solid "
          color="#D6DEFF"
        />
        {page == 0 && (
          <Box
            pos="absolute"
            w="192px"
            h="2px"
            left="124px"
            top="139px"
            bgColor="brand.600"
          ></Box>
        )}
        {page == 1 && (
          <Box
            pos="absolute"
            w="192px"
            h="2px"
            left="310px"
            top="139px"
            bgColor="brand.600"
          ></Box>
        )}
        {page == 2 && (
          <Box
            pos="absolute"
            w="192px"
            h="2px"
            left="500px"
            top="139px"
            bgColor="brand.600"
          ></Box>
        )}
        <Box position="absolute" top="180" left="133" w="696px">
          {page === 0 && <RequsitionDetails />}
          {page === 1 && <JobDetails />}
          {page === 2 && <InterviewDetails />}
        </Box>
        <Box
          pos="absolute"
          left="874"
          top="175"
          right="124"
          w="442px"
          bgColor="brand.200"
          borderRadius="10px"
          boxSizing="border-box"
          boxShadow="-24px -24px 34px #FFFFFF, 24px 24px 34px rgba(128, 135, 164, 0.13)"
        >
          <Flex justifyContent="space-between">
            <Text
              mt="10px"
              ml="25px"
              fontStyle="italic"
              fontWeight="500"
              fontSize="13px"
              lineHeight="18px"
              color="brand.500"
            >
              Draft
            </Text>
            <Box
              w="121px"
              h="28px"
              bgColor="brand.600"
              borderRadius=" 0px 10px 0px 0px"
              textAlign="center"
            >
              <Text
                fontStyle="italic"
                fontWeight="500"
                fontSize="13px"
                lineHeight="18px"
                mt="5px"
                color="brand.800"
              >
                Preview
              </Text>
            </Box>
          </Flex>
          <Box>
            {page == 0 && <RequsitionCard />}
            {page == 1 && (
              <>
                <RequsitionCard />
                <JobCard />
              </>
            )}
            {page == 2 && (
              <>
                <RequsitionCard />
                <JobCard /> <InterviewCard />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </PageContext.Provider>
  );
};

export default MainForm;
