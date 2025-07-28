import { NavLink } from 'react-router';

export const NavItemMobile = ({ name, url }: { name: string; url: string }) => {
  return (
    <li key={name}>
      <NavLink
        to={url}
        title={`Ir a página de ${name}`}
        aria-label={`Ir a página de ${name}`}
        className={({ isActive }) =>
          `block py-2 transition-colors duration-300 focus:border-none ${
            isActive
              ? 'text-yellow-400 rounded-xl bg-gray-dark'
              : 'text-gray-300 hover:text-yellow-500'
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
