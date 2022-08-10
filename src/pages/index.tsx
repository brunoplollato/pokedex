import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import getServerSideProps from '../utils/getServerSideProps';

const Home: NextPage = ({ pokemons }: any) => {
  return (
    <div className="container">
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

export { getServerSideProps };