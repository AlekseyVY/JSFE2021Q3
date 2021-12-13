import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import searchReducer from './reducers/searchReducer';
import toysReducer from './reducers/toysReducer';
import filteredToysReducer from './reducers/fileredToysReducer';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    filters: filterReducer,
    search: searchReducer,
    filtered: filteredToysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
