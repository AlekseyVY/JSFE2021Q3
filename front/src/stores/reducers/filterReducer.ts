import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => console.log(state, action),
  },
});

export const { setFilter } = filterSlice.actions;
export const selectValue = (state: RootState) => state;
export default filterSlice.reducer;
