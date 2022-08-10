import PokemonCard from "../PokemonCard";
import { Pokemon, PokemonListInterface } from "../../types/global";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemonData, fetchNext } from "../../api/api";
import { useEffect, useState } from "react";

export default function PokemonList({
  pokemons,
  loading,
  next,
  totalPages,
}: PokemonListInterface) {
  const [pokemonsData, setPokemonsData] = useState(pokemons)
  const [hasMore, setHasMore] = useState(true)
  const [nextLink, setNextLink] = useState(next)
  const getMorePokemons = async () => {
    const res = await fetchNext(nextLink)
    const promises = res?.results?.map(async (pokemon: {url: string}) => {
      return await getPokemonData(pokemon.url);
    });
    const data = await Promise.all(promises) as Pokemon[];
    setPokemonsData(pokemonsData => [...pokemonsData, ...data])
    setNextLink(res.next)
  }
  
  useEffect(() => {
    setHasMore(+totalPages > pokemonsData.length ? true : false)
  }, [pokemonsData])

  return (
    <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex-col mb-20">
      <p className="text-3xl text-center font-bold">Pokedex</p>
      <InfiniteScroll
        dataLength={pokemonsData.length}
        next={getMorePokemons}
        hasMore={hasMore}
        loader={<p className="text-lg">Loading...</p>}
        endMessage={
          <p className="text-center text-lg">All pokemons loaded!</p>
        }
        className="flex flex-row justify-start gap-5 mt-5 flex-wrap"
      >
        {
          pokemonsData?.map(({ sprites, name, types, id }, key) => {
            return (
              <PokemonCard image={sprites.front_default} name={name} types={types} game_index={id} key={key} />
            )
          })
        }
      </InfiniteScroll>
    </div>
  )
}