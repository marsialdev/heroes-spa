import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router';
import { AuthLayout } from '../auth/layout';

export const PublicLayout = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Debe estar dentro de AuthProvider');

  const { state } = context;

  const lastPath = localStorage.getItem('lastPath') || '/';

  return !state.logged ? <AuthLayout /> : <Navigate to={lastPath} />;
};
