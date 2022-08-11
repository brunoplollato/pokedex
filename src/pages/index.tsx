import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { getPokemonData, getPokemons } from '../api/api';
import PokemonList from '../components/PokemonList';
import { Pokemon } from '../types/global';

const Home: NextPage = ({ data, res }: any) => {
  const [pokemons, setPokemons] = useState(data)
  const [totalPages, setTotalPages] = useState(res.count)
  const [next, setNext] = useState(res.next)
  return (
    <div className="container">
      <Head>
        <title>Pokedex | Home</title>
        <meta name="description" content="Next.js Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <PokemonList pokemons={pokemons} loading={false} next={next} totalPages={totalPages} />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(ctx: any) {
  const itensPerPage = 25;
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