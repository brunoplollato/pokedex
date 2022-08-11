import { createContext, useContext, useState, } from "react";
import { Props } from "../types/global";

const PokeContext = createContext('');

export const usePoke = () => useContext(PokeContext);

export const PokemonProvider = ({ children }: Props) => {
  const value = ''
  return (
    <PokeContext.Provider value={value}>
      {children}
    </PokeContext.Provider>
  )
};

export default PokeContext;