import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import searchReducer from './reducers/searchReducer';
import toysReducer from './reducers/toysReducer';
import filteredToysReducer from './reducers/fileredToysReducer';
import optionsReducer from './reducers/optionsReducer';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    filters: filterReducer,
    search: searchReducer,
    filtered: filteredToysReducer,
    options: optionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
