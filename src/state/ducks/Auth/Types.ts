import { login } from './Actions';

export interface AuthState {
  auth: Auth;
}

export interface Auth {
  isAuthorized: boolean;
  username: string;
}

export const AuthActions = {
  LOGIN: 'LOGIN'
};

export type Login = ReturnType<typeof login>;
