import { HeroList } from '../components';

export const DCPage = () => {
  return (
    <>
      <h1 className="text-3xl text-white">DC Comics</h1>
      <hr />

      <HeroList publisher={'DC Comics'} />
    </>
  );
};
