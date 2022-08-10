import { getPokemons, getPokemonData } from '../api/api';
import { Pokemon } from '../types/global';

export default async function getServerSideProps(ctx: any) {
  const itensPerPage = 35;
  const page = 0;
  const res = await getPokemons(itensPerPage, itensPerPage * page);
  const promises = res?.results?.map(async (pokemon: {url: string}) => {
    return await getPokemonData(pokemon.url);
  });
  const data = await Promise.all(promises) as Pokemon[];

  return {
    props: {
      data,
      res
    }
  }
}