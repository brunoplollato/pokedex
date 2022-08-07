import { usePoke } from "../../contexts/PokemonContext"

export default function PokemonCard() {
  const poke = usePoke()

  return (
    <div>
      <div className="flex justify-center pr-4 py-2 shadow-md border-l-4 border-green-700 rounded-md bg-green-100">
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur"/>
        </div>
        <div>
          <p className="text-2xl text-extrathin">
            Bulbasaur
          </p>
          <div className="flex flex-row gap-1">
            <span className="rounded-2xl px-2 leading-4 text-xs text-white bg-green-500">Grass</span>
            <span className="rounded-2xl px-2 leading-4 text-xs text-white bg-purple-500">Poison</span>
          </div>
          <p className="text-gray text-xs text-end w-full mt-3 text-gray-400">#1</p>
        </div>
      </div>
    </div>
  )
}