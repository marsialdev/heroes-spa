import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-3xl text-white">Marvel Comics</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};
