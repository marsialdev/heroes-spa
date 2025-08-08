import { AppRouter } from './AppRouter';
import { AuthProvider } from './auth/context';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
