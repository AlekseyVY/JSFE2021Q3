import { createSlice } from '@reduxjs/toolkit';
import data from '../../providers/data';
import { RootState } from '../store';

const initialState = data;

export const filteredToysSlice = createSlice({
  name: 'filteredToys',
  initialState,
  reducers: {
    setFiltered: (state, action) => action.payload,
  },
});

export const { setFiltered } = filteredToysSlice.actions;
export const selectValue = (state: RootState) => state;
export default filteredToysSlice.reducer;
