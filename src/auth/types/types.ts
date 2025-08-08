export interface User {
  name: string;
}

export type authLogin = '[Auth] Login';
export type authLogout = '[Auth] Logout';

export type AuthAction =
  | { type: authLogin; payload: User }
  | { type: authLogout };

export const authTypes = {
  login: '[Auth] Login' as authLogin,
  logout: '[Auth] Logout' as authLogout,
};

export interface AuthContextProps {
  state: AuthState;
  login: (name: string) => void;
  logout: () => void;
}

export interface AuthState {
  logged: boolean;
  user?: User;
}
