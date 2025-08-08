import { useMemo } from 'react';
import type { Publisher } from '../data/heroes';
import { getHeroesByPublisher } from '../helpers/';
import { HeroCard } from './HeroCard';

interface HeroListProps {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: HeroListProps) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="grid grid-cols-2 justify-center justify-items-center items-center gap-4 mt-5 text-gray-300 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};
