import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { valueProps} from "../../../model";


// Define the initial state using that type
const initialState: valueProps = {
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

export const detailsSlice = createSlice({
  name: "details",

  initialState,
  reducers: {
    add: (state, action: PayloadAction<valueProps>) => {
      state.title = action.payload.title;
      state.owner = action.payload.owner;
      state.hiringManger = action.payload.hiringManger;
      state.openings = action.payload.openings;
      state.urgency = action.payload.urgency;
      state.employmentType = action.payload.employmentType;
      state.jobTitle = action.payload.jobTitle;
      state.jobDescription = action.payload.jobDescription;
      state.jobLocation = action.payload.jobLocation;
      state.interviewMode = action.payload.interviewMode;
      state.interviewDuration = action.payload.interviewDuration;
      state.interviewLanguage = action.payload.interviewLanguage;
    },
    refresh: (state) => {
      state.title = "";
      state.owner = "";
      state.hiringManger = "";
      state.openings = "";
      state.urgency = "";
      state.employmentType = "";
      state.jobTitle = "";
      state.jobDescription = "";
      state.jobLocation = "";
      state.interviewMode = "";
      state.interviewDuration = "";
      state.interviewLanguage = "";
    },
  },
});

export const { add, refresh } = detailsSlice.actions;

export default detailsSlice.reducer;
