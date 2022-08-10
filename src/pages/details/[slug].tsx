import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header';
import getServerSideProps from '../../utils/getServerSideProps';
import { useRouter } from 'next/router';
import capitalize from '../../helpers/capitalize';
import Breadcrumb from '../../components/Breadcrumb';
import ProgressBar from '../../components/ProgressBar';
import { Stat } from '../../types/global';

const Details: NextPage = ({ pokemons }) => {
  const router = useRouter();
  const { slug } = router.query;
  const pokemon = pokemons.filter((pokemon: { name: string }) => pokemon.name === slug)
  console.log("🚀 ~ file: [slug].tsx ~ line 14 ~ pokemon", pokemon[0] )

  return (
    <div className='container'>
      <Head>
        <title>Pokedex | { capitalize(slug as string) }</title>
      </Head>

      <Header />
      <main className='max-w-6xl mx-auto py-5'>
        <Breadcrumb last={capitalize(slug as string)} />
        <div className="flex mt-10 gap-5">
          <div className="w-1/2">
            <Image
              src={pokemon[0].sprites.other.dream_world.front_default}
              alt={slug as string}
              width="600"
              height="600"
            />
          </div>
          <div className="w-1/2 pl-32 relative">
            <div className="flex items-end">
              <div className={`rounded-full border-4 border-white w-36 avatar ${pokemon[0].types[0].type.name}`}>
                <Image src={pokemon[0].sprites.front_default} alt={slug as string} width="96" height="96" className="w-36" />
              </div>
              <div className="flex justify-between items-end w-full">
                <h2 className="text-4xl font-bold">{capitalize(slug as string)}</h2>
                <span className="text-2xl font-bold italic text-gray-500">#{ pokemon[0].id }</span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-1 my-2 w-28">
              {
                pokemon[0]?.types?.map(({ type }, key) => {
                  return (
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white ${type.name}`} key={key} >{ type.name }</span>
                  )
                })
              }
            </div>
            <div className="flex justify-between flex-wrap px-5 mt-4 border-t pt-3">
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Experience:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon[0].base_experience }</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Weight:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon[0].weight }</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Height:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon[0].height }</span>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-wrap px-5 mt-4 pt-3">
              <p className="font-bold text-2xl mb-2 border-t border-gray-200 pt-4">Stats</p>
              <ul className="flex flex-col gap-y-3">
                {
                  pokemon[0].stats.map((stat: Stat, key: number) => {
                    const color = () => {
                      switch (stat.stat.name) {
                        case 'hp':
                          return 'red'
                        case 'attack':
                          return 'orange'
                        case 'defense':
                          return 'green'
                        case 'special-attack':
                          return 'amber'
                        case 'special-defense':
                          return 'purple'
                        case 'speed':
                          return 'blue'
                        default:
                          break;
                      }
                    }
                    return (
                      <li key={key}>
                        <p className="text-gray-500 font-bold mb-1">{ stat.stat.name }</p>
                        <ProgressBar color={color()} size={stat.base_stat} />
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="flex flex-col justify-between flex-wrap px-5 mt-4 pt-3">
              <p className="font-bold text-2xl mb-2 border-t border-gray-200 pt-4">Abilities</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Details

export { getServerSideProps };