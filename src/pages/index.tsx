import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import PokemonList from '../components/PokemonList';
import getServerSideProps from '../utils/getServerSideProps';

const Home: NextPage = ({ data, res }: any) => {
console.log("🚀 ~ file: index.tsx ~ line 8 ~ res", res)
  const [pokemons, setPokemons] = useState(data)
  const [totalPages, setTotalPages] = useState(res.count)
  const [next, setNext] = useState(res.next)
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ pokemons", pokemons)
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

export { getServerSideProps };