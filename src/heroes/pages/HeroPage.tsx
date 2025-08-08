import { Navigate, useNavigate, useParams } from 'react-router';
import { getHeroById } from '../helpers';
import { HeroDescription } from '../components/HeroDescription';
import { IoCaretBack } from 'react-icons/io5';
import { useMemo } from 'react';

export const HeroPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  if (!id) return <Navigate to="/marvel" />;

  const hero = useMemo(() => getHeroById(id), [id]);
  if (!hero) return <Navigate to="/marvel" />;

  const heroImage = `${import.meta.env.BASE_URL}heroes/${hero.id}.jpg`;

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-7 md:gap-5 md:items-center md:justify-items-center">
          <div className="md:col-span-3">
            <div className="max-h-[30rem] md:max-h-full mb-6 rounded-t-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={heroImage}
                alt={hero.id}
              />
            </div>
          </div>
          <div className="text-center text-gray-300 space-y-3 md:col-span-4 md:text-start">
            <h1 className="text-white text-5xl font-bold">{hero.superhero}</h1>
            <div className="space-y-2">
              <HeroDescription label="Publisher" description={hero.publisher} />
              <HeroDescription label="Name" description={hero.alter_ego} />
              <HeroDescription
                label="First Appearance"
                description={hero.first_appearance}
              />
              <HeroDescription
                label="Characters"
                description={hero.characters}
              />
            </div>

            <div className="">
              <button
                className="mx-auto mt-5 flex items-center justify-center gap-1 px-5 py-3 bg-slate-950 text-gray-300 md:mx-0 md:mr-auto hover:bg-slate-800 hover:text-white duration-300"
                onClick={() => onNavigateBack()}
              >
                <IoCaretBack /> Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
