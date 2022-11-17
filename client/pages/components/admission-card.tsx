import { FaBullhorn } from "react-icons/fa"
import Link from "next/link"

interface ICard {
  title: string
  link: string
}

const AdmissionCard: React.FunctionComponent<ICard> = ({ title, link }) => {
  return (
    <>
      <div className="card min-w-full bg-base-100 card-bordered shadow-lg mb-4">
        <div className="card-body flex md:flex-row justify-between">
          <h3
            className={`card-title text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl`}
          >
            <span>
              <FaBullhorn className="text-primary" />
            </span>
            {title}
          </h3>
          <Link href={link}>
            <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
              Read more →
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdmissionCard
