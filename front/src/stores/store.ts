import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import toysReducer from './reducers/toysReducer';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
