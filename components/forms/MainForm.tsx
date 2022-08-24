import React, { useState, createContext } from "react";
import RequsitionDetails from "./RequsitionDetails";
import JobDetails from "./JobDetails";
import InterviewDetails from "./InterviewDetails";
import { Heading, Text, Box, Flex, Button, Divider } from "@chakra-ui/react";
import { valueProps } from "../../model";
import InterviewCard from "../cards/InterviewCard";
import JobCard from "../cards/JobCard";
import RequsitionCard from "../cards/RequsitionCard";

interface PageContextInterface {
  handlePrev: () => void;
  handleNext: () => void;
  data: valueProps;
  getData: ({ ...values }: { [x: string]: any }) => void;
}

export const PageContext = createContext<PageContextInterface | null>(null);

const MainForm = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<valueProps>({
    title: "",
    owner: "",
    hiringManger: "",
    openings: "",
    urgency: "",
    employmentType: "",
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  });

  const getData = (values: any) => {
    setData((prevState) => ({
      ...prevState,
      title: values.title,
      owner: values.owner,
      hiringManger: values.hiringManger,
      openings: values.openings,
      urgency: values.urgency,
      employmentType: values.employmentType,
      jobTitle: values.jobTitle,
      jobDescription: values.jobDescription,
      jobLocation: values.jobLocation,
      interviewMode: values.interviewMode,
      interviewDuration: values.interviewDuration,
      interviewLanguage: values.interviewLanguage,
    }));
  };
  console.log(data);
  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (page == 2) {
      setPage(0);
    } else {
      setPage((cur) => cur + 1);
    }
  };

  return (
    <PageContext.Provider value={{ handlePrev, handleNext, data, getData }}>
      <Box bgColor="brand.200" height="1024px" width="1440px">
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
          <Button
            variant="unstyled"
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
            cursor="pointer"
            _hover={{
              color: "brand.700",
              fontWeight: "700",
            }}
          >
            Requsition Details{" "}
          </Button>
          <Button
            variant="unstyled"
            ml="89px"
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
            cursor="pointer"
            _hover={{
              color: "brand.700",
              fontWeight: "700",
            }}
          >
            Job Details{" "}
          </Button>
          <Button
            variant="unstyled"
            ml="89px"
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            letterSpacing="0.01em"
            color="brand.400"
            cursor="pointer"
            _hover={{
              color: "brand.700",
              fontWeight: "700",
            }}
          >
            Interview Settings{" "}
          </Button>
        </Flex>
        <Divider
          pos="absolute"
          w="1192px"
          left="124px"
          top="139px"
          border="1px solid "
          color="#D6DEFF"
        />
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
            {page == 0 && <RequsitionCard value={data} />}
            {page == 1 && (
              <>
                <RequsitionCard value={data} />
                <JobCard value={data} />
              </>
            )}
            {page == 2 && (
              <>
                <RequsitionCard value={data} />
                <JobCard value={data} /> <InterviewCard value={data} />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </PageContext.Provider>
  );
};

export default MainForm;
