import PokemonCard from "../PokemonCard";
import { PokemonListInterface } from "../../types/global";

export default function PokemonList({
  pokemons,
  loading,
  page,
  totalPages,
}: PokemonListInterface) {
  return (
    <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex-col mb-20">
      <p className="text-3xl text-center font-bold">Pokedex</p>
      <div className="flex flex-row justify-start gap-5 mt-5 flex-wrap">
        {
          pokemons?.map(({ sprites, name, types, id }, key) => {
            return (
              <PokemonCard image={sprites.front_default} name={name} types={types} game_index={id} key={key} />
            )
          })
        }
      </div>
    </div>
  )
}