import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { HeroesLayout } from '../heroes/layout';
import { Navigate, useLocation } from 'react-router';

export const ProtectedLayout = () => {
  const context = useContext(AuthContext);
  const { pathname, search } = useLocation();

  if (!context) throw new Error('Debe estar dentro de AuthProvider');

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  const { state } = context;
  return state.logged ? <HeroesLayout /> : <Navigate to={'login'} />;
};
