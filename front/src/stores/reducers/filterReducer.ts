import { createSlice } from '@reduxjs/toolkit';
import { filters } from '../../providers/filters';
import { IFilters } from '../../types/globals.d';
import { RootState } from '../store';

const initialState: IFilters = filters;

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { category, subCategory, name } = action.payload;
      if (!name) state[category][subCategory] = !state[category][subCategory];
      if (name) state[category][subCategory][name] = !state[category][subCategory][name];
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const selectValue = (state: RootState) => state;
export default filterSlice.reducer;
