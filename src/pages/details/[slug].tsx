import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import capitalize from '../../helpers/capitalize';
import Breadcrumb from '../../components/Breadcrumb';
import ProgressBar from '../../components/ProgressBar';
import { Stat, Type } from '../../types/global';
import { searchPokemon } from '../../api/api';

const Details: NextPage = ({pokemon}: any) => {
console.log("🚀 ~ file: [slug].tsx ~ line 12 ~ pokemon", pokemon)
  const router = useRouter();
  const { slug } = router.query;


  return (
    <div className='container'>
      <Head>
        <title>Pokedex | { capitalize(slug as string) }</title>
      </Head>

      <main className='max-w-6xl mx-auto py-5'>
        <Breadcrumb last={capitalize(slug as string)} />
        <div className="flex mt-10 gap-5">
          <div className="w-1/2">
            <Image
              src={pokemon.sprites.other.dream_world.front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={slug as string}
              width="600"
              height="600"
            />
          </div>
          <div className="w-1/2 pl-32 relative">
            <div className="flex items-end">
              <div className={`rounded-full border-4 border-white w-36 avatar ${pokemon.types[0].type.name}`}>
                <Image src={pokemon.sprites.front_default} alt={slug as string} width="96" height="96" className="w-36" />
              </div>
              <div className="flex justify-between items-end w-full">
                <h2 className="text-4xl font-bold ml-3">{capitalize(slug as string)}</h2>
                <span className="text-2xl font-bold italic text-gray-500">#{ pokemon.id }</span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-1 my-2 w-28">
              {
                pokemon.types.map(({ type }: Type, key: number) => {
                  return (
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white ${type?.name}`} key={key} >{ type?.name }</span>
                  )
                })
              }
            </div>
            <div className="flex justify-between flex-wrap px-5 mt-4 border-t pt-3">
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Experience:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon.base_experience }</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Weight:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon.weight }</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-extrathin text-sm">
                  Height:
                </span>
                <span className="text-gray-700 text-sm">{ pokemon.height }</span>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-wrap px-5 mt-4 pt-3">
              <p className="font-bold text-2xl mb-2 border-t border-gray-200 pt-4">Stats</p>
              <ul className="flex flex-col gap-y-3">
                {
                  pokemon.stats.map((stat: Stat, key: number) => {
                    const color = () => {
                      switch (stat?.stat?.name) {
                        case 'hp':
                          return 'bg-red-600'
                        case 'attack':
                          return 'bg-orange-600'
                        case 'defense':
                          return 'bg-green-600'
                        case 'special-attack':
                          return 'bg-amber-600'
                        case 'special-defense':
                          return 'bg-purple-600'
                        case 'speed':
                          return 'bg-blue-600'
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

export async function getServerSideProps(ctx: any) {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const pokemon = await searchPokemon((ctx.query.slug).toLowerCase());

  return {
    props: { pokemon }
  }
}
