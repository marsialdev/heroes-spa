import { heroes, type Publisher, type Hero } from '../data/heroes';

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
  const validPublishers = ['Marvel Comics', 'DC Comics'];

  if (!validPublishers.includes(publisher))
    throw new Error(`${publisher} is not a valid publisher`);

  return heroes.filter((hero) => hero.publisher === publisher);
};
