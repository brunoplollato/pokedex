export default function SearchBar() {
  return (
    <div className="mt-1 relative shadow-sm flex">
      <input
        type="text"
        name="price"
        id="price"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md rounded-r-none"
        placeholder="Procurar..."
      />
      <button type="button" className="p-2 bg-white rounded-r-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}