import { configureStore } from '@reduxjs/toolkit';
import toysReducer from './reducers/toysReducer';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
