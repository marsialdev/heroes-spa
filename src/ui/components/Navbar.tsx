import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoClose } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';
import { NavItem, NavLogoutButton } from './';

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <nav className="px-4 bg-slate-950 outline-primary/10 outline-1 md:outline-0 md:px-8">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 md:py-6 xl:py-7">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
          title="Ir a página de inicio"
          aria-label="Ir a página de inicio"
        >
          <span className="text-gray-50 font-bebas font-bold whitespace-nowrap md:block md:text-[14px]">
            Heroes SPA
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm focus:outline-none focus:ring-2 text-gray-400 rounded-lg hover:bg-gray-700 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-solid-bg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <IoClose className="w-10 h-10" />
          ) : (
            <IoMdMenu className="w-10 h-10" />
          )}
        </button>

        {/* Desktop */}
        <div className="w-auto hidden md:block" id="navbar-solid-bg">
          <ul className="flex flex-row items-center mt-0 space-x-6 rtl:space-x-reverse font-medium rounded-lg border-0 bg-transparent">
            <NavItem url="/marvel" name="Marvel" />
            <NavItem url="/dc" name="DC" />
            <NavLogoutButton onLogout={handleLogout} />
            <span className="text-gray-500">¡Bienvenido!</span>
          </ul>
        </div>

        {/* Mobile */}
        <div
          className={`w-full transition-all duration-300 ease-in-out overflow-hidden md:hidden
            ${
              isOpen
                ? 'h-48 opacity-100 pointer-events-auto'
                : 'h-0 opacity-0 pointer-events-none'
            }
          `}
        >
          <ul className="flex flex-col mt-4 rounded-xl bg-transparent font-medium">
            <span className="my-2 text-gray-500">¡Bienvenido!</span>
            <NavItem url="/marvel" name="Marvel" />
            <NavItem url="/dc" name="DC" />
            <NavLogoutButton onLogout={handleLogout} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
