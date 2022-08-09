import { useEffect } from "react";
import { Pokemon } from "../../types/global";
import PokemonCard from "../PokemonCard";

export default function PokemonList({
  pokemons,
  loading,
  page,
  totalPages,
}) {
  return (
    <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex-col">
      <p className="text-3xl text-center font-bold">Pokemon List</p>
      <div className="flex flex-row justify-start gap-5 mt-5 flex-wrap">
        {
          pokemons?.map(({ sprites, name, types, order }, key) => {
            return (
              <PokemonCard image={sprites.front_default} name={name} types={types} order={order} key={key} />
            )
          })
        }
      </div>
    </div>
  )
}