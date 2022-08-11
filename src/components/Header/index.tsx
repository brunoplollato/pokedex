/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import SearchBar from '../SearchBar';
import Link from 'next/link';

export default function Header() {
  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src="/pokemon.svg"
                alt="Pokedex"
                width={100}
                height={40}
                className="h-8 w-auto sm:h-10 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-end lg:w-0 lg:flex-1 px-3">
            <SearchBar />
          </div>
        </div>
      </div>
    </Popover>
  )
}