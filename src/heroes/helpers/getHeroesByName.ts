import { heroes, type Hero } from '../data/heroes';

export const getHeroesByName = (name: string): Hero[] | [] | undefined => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
