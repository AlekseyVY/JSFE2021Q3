import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  bg: 1,
  tree: '',
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => action.payload,
    setBg: (state, action) => {
      state.bg = action.payload;
    },
  },
});

export const { setOptions, setBg } = optionsSlice.actions;
export const selectValue = (state: RootState) => state;
export default optionsSlice.reducer;
