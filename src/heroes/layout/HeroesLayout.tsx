import { Outlet } from 'react-router';
import { Navbar } from '../../ui/components/Navbar';

export const HeroesLayout = () => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <Navbar />

        <div className="max-w-screen-xl mx-auto p-4 md:px-8 xl:px-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};
