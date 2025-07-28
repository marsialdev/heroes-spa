import { Outlet } from 'react-router';
import { Navbar } from '../../ui/components/Navbar';

export const HeroesLayout = () => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <Navbar />

        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
