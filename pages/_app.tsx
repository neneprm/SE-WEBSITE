import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from './components/navbar'
import Footer from './components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-base-100 font-Nunito">
      <div className="mx-4 lg:mx-48">
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
