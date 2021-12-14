import { createSlice } from '@reduxjs/toolkit';
import { IProps } from 'src/components/ToyCard/ToyCard.d';
import storageEntity from 'src/utils/storageEntity';
import data from '../../providers/data';
import { RootState } from '../store';

const initialState: IProps[] = storageEntity('get', 'toys', data);

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
