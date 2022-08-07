/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react'
import SearchBar from '../SearchBar'

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <SearchBar />
          </div>
        </div>
      </div>
    </Popover>
  )
}