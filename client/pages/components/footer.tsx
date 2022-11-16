import { H1, P } from "./headers"
const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className="footer-center md:footer py-10 md:py-20 bg-neutral text-neutral-content mt-auto">
      <div className="mx-4 md:mx-12">
        <H1 style="text-primary font-bold" text="KMITL" />
        <p className="text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
          &copy; {currentYear} International College, King Mongkut&apos;s Institute
          of Technology Ladkrabang
        </p>
      </div>
    </footer>
  )
}

export default Footer
