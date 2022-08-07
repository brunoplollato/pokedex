import PokemonCard from "../PokemonCard";

export default function PokemonList() {
  return (
    <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex-col">
      <p className="text-3xl text-center font-bold">Pokemon List</p>
      <div className="flex flex-row justify-start gap-5 mt-5 flex-wrap">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  )
}