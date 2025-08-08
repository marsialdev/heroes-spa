import { HashRouter, Routes, Route, Navigate } from 'react-router';
import { MarvelPage, DCPage, SearchPage, HeroPage } from './heroes/pages';
import { LoginPage } from './auth/pages/LoginPage';
import { ProtectedLayout, PublicLayout } from './layouts';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          {/* Redirect from / to /marvel */}
          <Route index element={<Navigate to="/marvel" />} />

          {/* Pages */}
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        {/* Auth routes */}
        <Route element={<PublicLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Catch-all for invalid routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
};
