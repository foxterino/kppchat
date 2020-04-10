import { AuthState } from './Types';

export const all = (state: AuthState) => state.auth;
export const isAuthorized = (state: AuthState) => all(state).isAuthorized;
export const username = (state: AuthState) => all(state).username;
