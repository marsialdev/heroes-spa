import type React from 'react';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router';

interface HeroFormProps {
  initialSearch: string;
}

export const HeroForm = ({ initialSearch }: HeroFormProps) => {
  const navigate = useNavigate();

  const { searchText, onInputChange } = useForm({
    searchText: initialSearch,
  });

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={onSearchSubmit}>
      <label
        htmlFor="inputHero"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search a hero
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="searchText"
          name="searchText"
          className="block w-full p-4 ps-10 text-sm border rounded-lg  bg-slate-950 border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 autofill:bg-slate-950 in-autofill:bg-slate-950 has-autofill:border-e-violet-950"
          placeholder="Search a hero..."
          value={searchText}
          onChange={onInputChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
