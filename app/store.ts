import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from './feature/details/detailsSlice'


export const store = configureStore({
  reducer: {
    details:detailsReducer
  },
})
export default store ;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch