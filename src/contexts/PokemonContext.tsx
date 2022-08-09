import { createContext, useContext, } from "react";
import { pokeContextType } from "../types/global";

const PokeContextDefaultValues: pokeContextType = {
  page: 1,
  totalPages: 1,
  loading: false,
  notFound: false,
  pokemons: [],
  favorites: [],
};

const PokeContext = createContext<pokeContextType>(PokeContextDefaultValues);

export const usePoke = () => useContext(PokeContext);

export const PokeProvider = PokeContext.Provider;

export default PokeContext;