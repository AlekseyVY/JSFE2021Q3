import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  bg: 1,
  tree: 1,
  snow: true,
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => action.payload,
    setBg: (state, action) => {
      state.bg = action.payload;
    },
    setTree: (state, action) => {
      state.tree = action.payload;
    },
    setSnow: (state) => {
      state.snow = !state.snow;
      console.log(state.snow);
    },
  },
});

export const {
  setOptions, setBg, setTree, setSnow,
} = optionsSlice.actions;
export const selectValue = (state: RootState) => state;
export default optionsSlice.reducer;
