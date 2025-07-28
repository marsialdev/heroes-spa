import { NavLink } from 'react-router';

export const NavItemDesktop = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  return (
    <li key={name}>
      <NavLink
        to={url}
        title={`Ir a página de ${name}`}
        aria-label={`Ir a página de ${name}`}
        className={({
          isActive,
        }) => `block p-0 rounded-sm border-0 transition-colors duration-300
      ${
        isActive
          ? 'p-0 m-0 text-yellow-400'
          : ' text-gray-300 hover:text-yellow-500'
      }
    `}
      >
        {name}
      </NavLink>
    </li>
  );
};
