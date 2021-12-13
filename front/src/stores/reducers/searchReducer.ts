import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;
export const selectValue = (state: RootState) => state;
export default searchSlice.reducer;
