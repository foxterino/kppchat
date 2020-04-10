import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import { chatReducer } from './Chat';

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>;
