import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import searchReducer from './reducers/searchReducer';
import toysReducer from './reducers/toysReducer';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    filters: filterReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
