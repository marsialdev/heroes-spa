import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
