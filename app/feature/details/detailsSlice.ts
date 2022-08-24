import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../store"
import { valueProps } from '../../../model'

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
}

export const detailsSlice = createSlice({
  name: 'details',
  
  initialState,
  reducers: {
   addTitle:(state,action: PayloadAction<string>)=>{
    state.title = action.payload
   }
  },
})

export const { addTitle} = detailsSlice.actions



export default detailsSlice.reducer