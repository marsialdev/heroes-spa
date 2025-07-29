import { NavLink } from 'react-router';

export const NavItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <li key={name}>
      <NavLink
        to={url}
        title={`Ir a página de ${name}`}
        aria-label={`Ir a página de ${name}`}
        className={({
          isActive,
        }) => `block py-2 rounded-sm border-0 focus:border-none transition-colors duration-300 md:inline-block md:p-0
      ${
        isActive
          ? 'p-0 m-0 rounded-xl text-yellow-400'
          : ' text-gray-300 hover:text-white'
      }
    `}
      >
        {name}
      </NavLink>
    </li>
  );
};
