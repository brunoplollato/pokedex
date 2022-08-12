import Link from "next/link";
import Image from "next/image";
import capitalize from "../../helpers/capitalize";

export default function SearchPreview({ value }: any) {
  return (
    <Link href={`/details/${value?.name}`}>
      <div className={`flex cursor-pointer w-full`}>
        <Image
          src={JSON.parse(value?.pokemon_v2_pokemonsprites[0].sprites).front_default}
          alt={value?.name}
          width={96}
          height={96}
        />
        <div className="flex flex-col w-full">
          <p className="text-2xl text-extrathin">
            {capitalize(value?.name)}
          </p>
          <div className="flex flex-row gap-1">
            {
              value?.pokemon_v2_pokemontypes.map(({ pokemon_v2_type }: any, key: number) => {
                return (
                  <span className={`rounded-2xl px-2 leading-4 text-xs text-white ${pokemon_v2_type.name}`} key={key}>{pokemon_v2_type.name}</span>
                )
              })
            }
          </div>
              <p className="text-gray text-xs text-end w-full mt-3 text-gray-400 mt-auto mix-blend-difference opacity-70">#{value?.id}</p>
        </div>
      </div>
    </Link>
  )
}
