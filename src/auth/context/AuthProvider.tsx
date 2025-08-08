import { useReducer, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { authTypes, type AuthAction } from '../types/types';

interface AuthProviderProps {
  children: ReactNode;
}

const init = () => {
  try {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    return {
      logged: !!user,
      user,
    };
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return {
      logged: false,
      user: null,
    };
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const user = { name };

    const action: AuthAction = {
      type: authTypes.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    const action: AuthAction = {
      type: authTypes.logout,
    };

    localStorage.removeItem('user');
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
