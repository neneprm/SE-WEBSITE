import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from './components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-base-100 font-Nunito mx-0 lg:mx-48">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
