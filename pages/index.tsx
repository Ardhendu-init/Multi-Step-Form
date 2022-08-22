import type { NextPage } from "next";
import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
} from "react";
import RequsitionDetails from "../components/forms/RequsitionDetails";
import JobDetails from "../components/forms/JobDetails";
import InterviewDetails from "../components/forms/InterviewDetails";
import { Heading, Text } from "@chakra-ui/react";
import { valueProps } from "../model";
interface PageContextInterface {
  handlePrev: (newData: valueProps) => void;

  handleNext: (newData: valueProps) => void;
}

export const PageContext = createContext<PageContextInterface | null>(null);
const intitalValues = {
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
};

const Home: NextPage = () => {
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
  const handlePrev = (newData: valueProps) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = (newData: valueProps) => {
    if (page == 2) {
      setData((prev) => ({ ...prev, ...newData }));
      console.log({ ...data, ...newData });
      setData({ ...intitalValues });
      setPage(0);
    } else {
      setData((prev) => ({ ...prev, ...newData }));
      setPage((cur) => cur + 1);
    }
  };
  const form = [
    <RequsitionDetails data={data} />,
    <JobDetails data={data} />,
    <InterviewDetails data={data} />,
  ];
  return (
    <PageContext.Provider value={{ handlePrev, handleNext }}>
      <Heading>Create Candidate Requsition</Heading>
      {form[page]}
    </PageContext.Provider>
  );
};

export default Home;
