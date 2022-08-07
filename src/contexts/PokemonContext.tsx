import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
}

type pokeContextType = {
  pokemon: {};
}

const PokeContextDefaultValues: pokeContextType = {
    pokemon: {}
};

const PokeContext = createContext<pokeContextType>(PokeContextDefaultValues);

export const usePoke = () => useContext(PokeContext);

export const PokeProvider = ({ children }: Props) => {
  const [next, setNext] = useState('')
  const [pokes, setPokes] = useState([])
  const getPokes = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then(res => res.json())
      .then(res => {
        setNext(res.next)
        setPokes(res.results)
      })
      .catch (err => {
        console.log(err )
      })
    }
    useEffect(() => {
      getPokes()
      console.log("🚀 ~ file: PokemonContext.tsx ~ line 28 ~ getPokes ~ Next", next)
      console.log("🚀 ~ file: PokemonContext.tsx ~ line 28 ~ getPokes ~ Pokes", pokes)
  }, [])
  const value = {
    pokemon: {}
  }
  return (
    <>
      <PokeContext.Provider value={value}>
        {children}
      </PokeContext.Provider>
    </>
  );
}