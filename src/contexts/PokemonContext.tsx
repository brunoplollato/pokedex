import { GetServerSideProps, GetStaticProps } from "next";
import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { pokeContextType, Props } from "../types/global";

const PokeContextDefaultValues: pokeContextType = {
  next: '',
  pokes: [],
  setLimit: 50,
  setOffset: 0,
  page: 1
};

const PokeContext = createContext<pokeContextType>(PokeContextDefaultValues);

export const usePoke = () => useContext(PokeContext);

export const PokeProvider = ({ children }: Props) => {
  console.log("🚀 ~ file: PokemonContext.tsx ~ line 18 ~ PokeProvider ~ children", children.props)
  const [next, setNext] = useState('');
  const [pokes, setPokes] = useState([]);
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(50)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  
  const getData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset} `)
    .then(res => res.json())
      .catch(err => console.log(err));
    setResults(data.results)
    const pokeList = await results.map(({ url }) => {
      fetch(url)
      .then(res => res.json())
      .catch(err => console.log(err));
    })
    setNext(data.next);
    setPokes(pokeList as SetStateAction<never[]>);
  }

  useEffect(() => {
    getData();
  }, [setPokes]);

  const value = {
    next,
    pokes,
    setLimit,
    setOffset,
    page,
    setPage,
  }
  return (
    <>
      <PokeContext.Provider value={value}>
        {children}
      </PokeContext.Provider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
  const data = await res.json();
  console.log("🚀 ~ file: PokemonContext.tsx ~ line 63 ~ constgetServerSideProps:GetServerSideProps= ~ data", 'ctx')
  
  return {
    props: { message: `Next.js is awesome` }
  }
}