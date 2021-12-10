import { createSlice } from '@reduxjs/toolkit';
import data from '../../providers/data';
import { RootState } from '../store';

const initialState = data;

export const toySlice = createSlice({
  name: 'toys',
  initialState,
  reducers: {
    setFavorite: (state, action) => state.forEach((ele) => {
      if (ele.num === action.payload.num) {
        ele.favorite = !ele.favorite;
      }
    }),
  },
});

export const { setFavorite } = toySlice.actions;
export const selectValue = (state: RootState) => state;
export default toySlice.reducer;
