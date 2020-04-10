import { createAction } from '@reduxjs/toolkit';
import { AuthActions } from './Types';

export const login = createAction(AuthActions.LOGIN, (username: string) => ({
  payload: username
}));
