import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import { getPokemonData, getPokemons } from '../api/api'
import { Pokemon } from '../types/global'


const Details: NextPage = () => {  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex | Pokemon</title>
      </Head>

      <Header />
      <main className="relative">
      </main>
    </div>
  )
}

export default Details

export async function getServerSideProps(ctx) {
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