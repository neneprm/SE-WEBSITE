import Image from "next/image"
import Link from "next/link"

import { FiLogIn } from "react-icons/fi"
import HeroArt from "./assets/hero.svg"
import logo from "./assets/logo.svg"

import { H1, P } from "./components/headers"
import SolidButton from "./components/buttons/solid-button"

const Login = () => {
  return (
    <>
      <section className="grid h-screen place-items-center">
        <div className="card card-body bg-base-100 card-bordered shadow-lg w-full md:w-fit md:p-28">
          <div className="w-48 md:w-max mx-auto mb-2">
            <Link href="/">
              <Image src={logo} alt="Home" />
            </Link>
          </div>
          <div className="form-control w-full md:w-72 lg:w-96">
            <form>
              <label className="block mb-4">
                <span>
                  <P text="Username" />
                </span>
                <input
                  type="text"
                  placeholder="Your username"
                  className="input input-primary input-bordered w-full"
                />
              </label>
              <label className="block">
                <span>
                  <P text="Password" />
                </span>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </form>
            <SolidButton
              style="mt-8 btn-accent text-base-100 text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
              text="Sign In"
              link=""
              icon={<FiLogIn />}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
