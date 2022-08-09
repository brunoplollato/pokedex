import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import { getPokemonData, getPokemons } from '../api/api'
import { Pokemon } from '../types/global'


const Home: NextPage = ({ pokemons }: any) => {  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex | Home</title>
        <meta name="description" content="Next.js Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative">
        <PokemonList pokemons={pokemons} loading={false} page={1} totalPages={100} />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(ctx: any) {
  const itensPerPage = 35;
  const page = 0;
  const data = await getPokemons(itensPerPage, itensPerPage * page);
  const promises = data?.results?.map(async (pokemon: {url: string}) => {
    return await getPokemonData(pokemon.url);
  });
  const pokemons = await Promise.all(promises) as Pokemon[];

  return {
    props: { pokemons }
  }
}