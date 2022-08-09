type types = {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export default function PokemonCard({
  image,
  name,
  types,
  order,
  key
}) {
  return (
    <div className="flex justify-center pr-4 py-2 shadow-md border-l-4 border-green-700 rounded-md bg-green-100 w-56" key={key}>
      <div>
        <img src={ image } alt={ name } />
      </div>
      <div>
        <p className="text-2xl text-extrathin">
          {name}
        </p>
        <div className="flex flex-row gap-1">
          {
            types?.map(({ type }, key) => {
              return (
                <span className={`rounded-2xl px-2 leading-4 text-xs text-white ${type.name}`} key={key} >{ type.name }</span>
              )
          })}
        </div>
            <p className="text-gray text-xs text-end w-full mt-3 text-gray-400">#{ order }</p>
      </div>
    </div>
  )
}