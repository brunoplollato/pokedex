import { useEffect, useRef, useState } from "react"
import { searchPokemonGQL } from "../../api/api";
import SearchPreview from "../SearchPreview"


const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};

export default function SearchBar(props) {
  const [result, setResult] = useState([]);
  const [value, setValue] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)

  const handleClickOutside = () => {
    setPreviewOpen(false)
    setValue('')
  };

  const ref = useOutsideClick(handleClickOutside);

  const search = async (term: string = value) => {
    const { pokemon_v2_pokemon } = await searchPokemonGQL(`"%${term}%"`);
    console.log("🚀 ~ file: index.tsx ~ line 40 ~ search ~ pokemon_v2_pokemon", pokemon_v2_pokemon)
    setResult(pokemon_v2_pokemon);
  }

  useEffect(() => {
    // Function launches after 1.5 seconds (1500 ms) of the last keystroke
    // On first render you don't want to launch anything
    // Thus, you check if the user typed a query at first
    let timer = setTimeout(() => {
      if(value.length >= 3)
        setPreviewOpen(true)
        search(value.toLowerCase())
    }, 1500)

    // If useEffect() relaunches, you clear the function
    // That means, the previous function won't launch
    // Thus, won't send a request to the API
    return () => {
      clearTimeout(timer)
      setResult([])
    }
  }, [value])

  return (
    <div className="mt-1 relative shadow-sm flex" ref={ref as any}>
      <input
        type="text"
        name="price"
        id="price"
        autoComplete="off"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md rounded-r-none outline-none"
        placeholder="Procurar..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="button" className="p-2 bg-white rounded-r-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      {
        previewOpen && <div className="absolute shadow-md flex flex-col w-full bg-white rounded-b-md top-9 p-3 gap-5 z-50">
        {
          result.length > 0 && result?.slice(0, 5)?.map((pokemon: any, key: number) => {
            return (
              <SearchPreview value={pokemon} key={key} />
            )
          })
          ||
          result.length === 0 && <p className="text-center text-sm">No results found.</p>
          }
      </div>
      }
    </div>
  )
}
