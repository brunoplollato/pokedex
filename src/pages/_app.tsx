import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PokeProvider } from '../contexts/PokemonContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokeProvider >
      <Component {...pageProps} />
    </PokeProvider>
  )
}

export default MyApp
