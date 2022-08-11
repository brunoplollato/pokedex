import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { PokemonProvider } from '../contexts/PokemonContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <PokemonProvider>
        <Header />
        <Component {...pageProps} />
      </PokemonProvider>
    </div>
  )
}

export default MyApp