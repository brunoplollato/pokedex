import { useEffect, useState } from "react"
import { usePoke } from "../../contexts/PokemonContext"

export default function PokemonCard() {
  const { pokes } = usePoke()
  const [pokemonList, setPokemonList] = useState(pokes);
      
  return (
    <>
      {
        pokemonList?.map((poke, key) => {
          return (
          <div className="flex justify-center pr-4 py-2 shadow-md border-l-4 border-green-700 rounded-md bg-green-100 w-56" key={key}>
          <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
          </div>
          <div>
            <p className="text-2xl text-extrathin">
              {poke?.name}
            </p>
            <div className="flex flex-row gap-1">
              <span className={`rounded-2xl px-2 leading-4 text-xs text-white`}>Grass</span>
              <span className={`rounded-2xl px-2 leading-4 text-xs text-white`}>Poison</span>
            </div>
            <p className="text-gray text-xs text-end w-full mt-3 text-gray-400">#1</p>
          </div>
        </div>
      )})}
    </>
  )
}