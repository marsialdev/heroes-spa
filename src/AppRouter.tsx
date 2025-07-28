import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { MarvelPage, DCPage, SearchPage, HeroPage } from './heroes/pages';
import { LoginPage } from './auth/pages/LoginPage';
import { HeroesLayout } from './heroes/layout';
import { AuthLayout } from './auth/layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeroesLayout />}>
          <Route index path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>

        <Route path="/" element={<Navigate to={'/marvel'} />} />
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </BrowserRouter>
  );
};
