import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { RootState, rootReducer } from './ducks';

const createStore = () => {
  const defaultMiddleware = getDefaultMiddleware<RootState>();
  const middleware = [...defaultMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware
  });

  return store;
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
