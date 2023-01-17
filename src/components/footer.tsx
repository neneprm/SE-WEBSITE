import H1 from "./headers/H1"
import Image from "next/image"
import KmitlLogo from "../pages/assets/kmitl-logo.png"

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className="footer-center md:footer py-10 md:py-20 bg-neutral text-neutral-content mt-auto">
      <div className="mx-4 md:mx-16 xl:mx-48 grid-flow-col">
        <div className="w-20 md:w-24 lg:w-20 2xl:w-24 mx-auto md:mr-4 ">
          <Image src={KmitlLogo} alt="KMITL Logo" />
        </div>
        <div className="grid-flow-col">
          <H1
            style="text-center md:text-justify text-primary font-bold"
            text="KMITL"
          />
          <p className="text-sm text-center md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
            &copy; {currentYear} International College, King Mongkut&apos;s
            Institute of Technology Ladkrabang
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
