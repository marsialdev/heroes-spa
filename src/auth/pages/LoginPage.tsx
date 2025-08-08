import { useNavigate } from 'react-router';
import { VscDebugStart } from 'react-icons/vsc';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('Debe estar dentro de <AuthProvider>');

  const { login } = context;

  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Mario Marcial');
    navigate(lastPath, { replace: true });
  };

  return (
    <>
      <div className="max-w-screen-xl min-h-screen mx-auto flex flex-col justify-center items-center px-4">
        <h1 className="font-bold text-white text-3xl mb-5">Heroes SPA</h1>

        <div className="w-full">
          <button
            className="w-1/4 py-3 mx-auto rounded-md flex items-center justify-center gap-1.5 bg-slate-950 text-gray-300 font-bold text-xl transition-colors duration-300 hover:bg-slate-800 hover:text-white md:w-auto md:px-12"
            onClick={() => handleLogin()}
          >
            <VscDebugStart />
          </button>
        </div>
      </div>
    </>
  );
};
