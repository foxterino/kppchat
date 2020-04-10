import { createReducer } from '@reduxjs/toolkit';
import { AuthActions, Login, Auth } from './Types';

const initialState: Auth = {
  isAuthorized: false,
  username: ''
};

export const authReducer = createReducer(initialState, {
  [AuthActions.LOGIN]: (state, action: Login) => ({
    ...state,
    isAuthorized: true,
    username: action.payload
  })
});
