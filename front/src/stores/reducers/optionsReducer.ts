import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import storageEntity from '../../utils/storageEntity';
import { options } from '../../providers/options';

const initialState = storageEntity('get', 'options', options);

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => action.payload,
    setBg: (state, action) => {
      state.bg = action.payload;
      storageEntity('set', 'options', state);
    },
    setTree: (state, action) => {
      state.tree = action.payload;
      storageEntity('set', 'options', state);
    },
    setSnow: (state) => {
      state.snow = !state.snow;
      storageEntity('set', 'options', state);
    },
    setMusic: (state, action) => {
      state.music = action.payload;
      storageEntity('set', 'options', state);
    },
    setLights: (state) => {
      state.lights = !state.lights;
      storageEntity('set', 'options', state);
    },
    setColor: (state, action) => {
      state.color = action.payload;
      storageEntity('set', 'options', state);
    },
    setTreeToys: (state, action) => {
      state.treeToys = action.payload;
      storageEntity('set', 'options', state);
    },
  },
});

export const {
  setOptions, setBg, setTree, setSnow, setMusic, setLights, setColor, setTreeToys,
} = optionsSlice.actions;
export const selectValue = (state: RootState) => state;
export default optionsSlice.reducer;
