import { AuthState } from './Types';

const all = (state: AuthState) => state.auth;
const isAuthorized = (state: AuthState) => all(state).isAuthorized;
const username = (state: AuthState) => all(state).username;

export const authSelectors = { all, isAuthorized, username };
