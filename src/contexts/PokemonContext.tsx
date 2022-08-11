import { createContext, useContext, useState, } from "react";
import { pokeContextType, Props } from "../types/global";

const PokeContextDefaultValues: pokeContextType = {
  pokemons: [],
  setPokemons: [],
};

const PokeContext = createContext<pokeContextType>(PokeContextDefaultValues);

export const usePoke = () => useContext(PokeContext);

export const PokemonProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState([])
  const value = {
    pokemons,
    setPokemons
  }
  return (
    <PokeContext.Provider value={value}>
      {children}
    </PokeContext.Provider>
  )
};

export default PokeContext;