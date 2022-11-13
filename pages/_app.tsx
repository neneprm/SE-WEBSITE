import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "./components/navbar"
import Footer from "./components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-base-100 font-Nunito flex xl:flex flex-col min-h-screen">
      <div className="mx-8 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-72 ">
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
