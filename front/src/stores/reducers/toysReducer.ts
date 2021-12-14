import { createSlice } from '@reduxjs/toolkit';
import storageEntity from 'src/utils/storageEntity';
import { IProps } from '../../components/ToyCard/ToyCard.d';
import data from '../../providers/data';
import { RootState } from '../store';

const initialState: IProps[] = storageEntity('get', 'toys', data);

export const toySlice = createSlice({
  name: 'toys',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.forEach((ele) => {
        if (ele.num === action.payload.num) {
          ele.favorite = !ele.favorite;
        }
      });
      storageEntity('set', 'toys', state);
    },
  },
});

export const { setFavorite } = toySlice.actions;
export const selectValue = (state: RootState) => state;
export default toySlice.reducer;
