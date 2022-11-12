import { H1, P } from "./headers"
const Footer = () => {
  return (
    <footer className="footer-center md:footer py-10 md:py-20 bg-neutral text-neutral-content">
      <div className="mx-4 md:mx-12">
        <H1 style="text-primary font-bold" text="KMITL" />
        <P
          text="&copy; 2022 International College, King Mongkut's Institute of Technology
          Ladkrabang"
        />
      </div>
    </footer>
  )
}

export default Footer
