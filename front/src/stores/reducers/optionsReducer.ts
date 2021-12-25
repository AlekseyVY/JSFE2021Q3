import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  bg: 1,
  tree: 1,
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
  },
});

export const { setOptions, setBg, setTree } = optionsSlice.actions;
export const selectValue = (state: RootState) => state;
export default optionsSlice.reducer;
