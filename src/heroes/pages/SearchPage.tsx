import { HeroForm } from '../components/HeroForm';
import { HeroCard } from '../components/HeroCard';
import { useSearchParams } from 'react-router';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  let search = searchParams.get('q') ?? '';

  const heroes = getHeroesByName(search);

  return (
    <>
      <div>
        <HeroForm initialSearch={search} />

        <div className="mt-6">
          {search === '' ? (
            <div className="p-3 rounded-sm bg-slate-700 text-white text-center md:max-w-screen-sm md:mx-auto">
              Search a hero
            </div>
          ) : (
            heroes?.length === 0 && (
              <div className="p-3 rounded-sm bg-slate-700 text-white text-center md:max-w-screen-sm md:mx-auto">
                No hero with <b>{search}</b>
              </div>
            )
          )}

          <div className="grid grid-cols-2 place-content-center gap-4 mt-5 text-gray-300 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
            {heroes?.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
