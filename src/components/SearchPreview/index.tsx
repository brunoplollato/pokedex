import Link from "next/link";
import Image from "next/image";

export default function SearchPreview() {
  return (
    <div className="absolute shadow-md flex flex-col w-full bg-white rounded-b-md top-9 p-3 gap-5 z-50">
      <Link href={`/details/Venusaur`} >
        <div className={`flex cursor-pointer w-full`}>
          <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}
            alt={'Venusaur'}
            width={96}
            height={96}
          />
          <div className="flex flex-col w-full">
            <p className="text-2xl text-extrathin">
              Venusaur
            </p>
            <div className="flex flex-row gap-1">
              {/* {
                types?.map(({ type }, key) => {
                  return ( */}
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white grass`}>grass</span>
                  {/* )
              })} */}
            </div>
                <p className="text-gray text-xs text-end w-full mt-3 text-gray-400 mt-auto mix-blend-difference opacity-70">#3</p>
          </div>
        </div>
      </Link>
      <Link href={`/details/Venomoth`} >
        <div className={`flex cursor-pointer w-full`}>
          <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png'}
            alt={'Venomoth'}
            width={96}
            height={96}
          />
          <div className="flex flex-col w-full">
            <p className="text-2xl text-extrathin">
              Venomoth
            </p>
            <div className="flex flex-row gap-1">
              {/* {
                types?.map(({ type }, key) => {
                  return ( */}
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white bug`}>bug</span>
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white poison`}>poison</span>
                  {/* )
              })} */}
            </div>
                <p className="text-gray text-xs text-end w-full mt-3 text-gray-400 mt-auto mix-blend-difference opacity-70">#49</p>
          </div>
        </div>
      </Link>
      <Link href={`/details/Venusaur`} >
        <div className={`flex cursor-pointer w-full`}>
          <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}
            alt={'Venusaur'}
            width={96}
            height={96}
          />
          <div className="flex flex-col w-full">
            <p className="text-2xl text-extrathin">
              Venusaur
            </p>
            <div className="flex flex-row gap-1">
              {/* {
                types?.map(({ type }, key) => {
                  return ( */}
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white grass`}>grass</span>
                  {/* )
              })} */}
            </div>
                <p className="text-gray text-xs text-end w-full mt-3 text-gray-400 mt-auto mix-blend-difference opacity-70">#3</p>
          </div>
        </div>
      </Link>
    </div>
  )
}