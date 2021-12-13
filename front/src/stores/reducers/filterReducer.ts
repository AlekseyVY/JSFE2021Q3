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
      const {
        category, subCategory, name, fromValue, toValue,
      } = action.payload;
      if (!name && !fromValue && !toValue) {
        state[category][subCategory] = !state[category][subCategory];
      }
      if (name && subCategory && !fromValue && !toValue) {
        state[category][subCategory][name] = !state[category][subCategory][name];
      }
      if (name && !subCategory && !fromValue && !toValue) {
        Object.entries(state[category]).forEach((ele) => {
          state[category][ele[0]] = false;
        });
        state[category][name] = true;
      }
      if ((fromValue || fromValue === 0) && toValue) {
        console.log(`Store from: ${fromValue}`);
        console.log(`Store to: ${toValue}`);
        state[category][subCategory].from = fromValue;
        state[category][subCategory].to = toValue;
      }
    },
    clearFilter: () => initialState,
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const selectValue = (state: RootState) => state;
export default filterSlice.reducer;
