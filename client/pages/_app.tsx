import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Login from "./login"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const GetContent = () => {
    const router = useRouter()
    if (router.pathname === "/login")
      return (
        <div className="bg-gradient">
          <div className="font-Nunito flex xl:flex flex-col min-h-screen mx-8 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-72">
            <Login />
          </div>
        </div>
      )
    return (
      <>
        <div className="bg-base-100 font-Nunito flex xl:flex flex-col min-h-screen">
          <div className="mx-8 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-72">
            <NavBar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </>
    )
  }

  return <>{GetContent()}</>
}

//   return (
//     <>
//       <div className="bg-base-100 font-Nunito flex xl:flex flex-col min-h-screen">
//         <div className="mx-8 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-72 ">
//           <NavBar />
//           <Component {...pageProps} />
//         </div>
//         <Footer />
//       </div>
//     </>
//   )
// }

export default MyApp
