import { createSlice } from '@reduxjs/toolkit';
import data from '../../providers/data';
import { RootState } from '../store';

const initialState = data;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    favorite: (state) => state,
  },
});

export const { favorite } = counterSlice.actions;
export const selectValue = (state: RootState) => state;
export default counterSlice.reducer;
