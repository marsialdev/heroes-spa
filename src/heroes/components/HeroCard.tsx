import { BsArrowRight } from 'react-icons/bs';
import type { Hero } from '../data/heroes';
import { Link } from 'react-router';

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  const heroImage = `${import.meta.env.BASE_URL}heroes/${hero.id}.jpg`;
  const heroURL = `/hero/${hero.id}`;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Card Header */}
      <div>
        <Link to={heroURL}>
          <img
            className="h-60 w-full md:h-[32rem] xl:h-[28rem] object-cover object-top"
            src={heroImage}
            alt={hero.id}
          />
        </Link>
      </div>

      <div className="py-5 space-y-3">
        {/* Card Body  */}
        <div className="text-center space-y-1">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {hero.superhero}
          </h5>

          <p>
            <span className="font-bold">Name:</span> {hero.alter_ego}
          </p>
        </div>

        {/* Card Footer */}
        <div className="text-center">
          <Link
            to={heroURL}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
          >
            Ver más <BsArrowRight className="ms-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
