interface NavLogoutButtonProps {
  onLogout: () => void;
}
export const NavLogoutButton = ({ onLogout }: NavLogoutButtonProps) => {
  return (
    <button
      className="py-2 text-gray-300 text-start cursor-pointer hover:text-white transition-colors duration-300"
      onClick={() => onLogout()}
    >
      Logout
    </button>
  );
};
