import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PokemonCardInterface } from '../../types/global'
import capitalize from '../../helpers/capitalize';

export default function PokemonCard({
  image,
  name,
  types,
  game_index,
  key
}: PokemonCardInterface) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Link href={`/details/${name}`} >
        <div className={`flex justify-center pr-4 py-2 shadow-md border-l-4 rounded-md w-56 h-28 min-h-full cursor-pointer bg-${types[0].type.name} border-${types[0].type.name}`} key={key}>
          <div>
            <Image
              src={image}
              alt={name}
              width={96}
              height={96}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl text-extrathin">
              {capitalize(name)}
            </p>
            <div className="flex flex-row gap-1">
              {
                types?.map(({ type }, key) => {
                  return (
                    <span className={`rounded-2xl px-2 leading-4 text-xs text-white ${type.name}`} key={key} >{ type.name }</span>
                  )
              })}
            </div>
                <p className="text-gray text-xs text-end w-full mt-3 text-gray-400 mt-auto mix-blend-difference opacity-70">#{ game_index }</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}