import Link from "next/link"

interface ICard {
  icon?: JSX.Element
  title: string
  link: string
}

const OneLineCard: React.FunctionComponent<ICard> = ({ icon, title, link }) => {
  return (
    <>
      <div className="card min-w-full bg-base-100 card-bordered shadow-lg mb-4">
        <div className="card-body items-center text-center md:text-left lg:flex lg:flex-row md:justify-between">
          <div className="text-center lg:hidden">{icon}</div>
          <h3
            className={`card-title text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl`}
          >
            <span className="text-center hidden lg:block lg:mr-4">{icon}</span>
            {title}
          </h3>

          {/* Button Mobile */}
          <div className="card-actions justify-center md:hidden">
            <Link href={`${link}`}>
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                Read more →
              </button>
            </Link>
          </div>

          {/* Button Desktop */}
          <div className="hidden md:block">
            <Link href={link}>
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                Read more →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneLineCard
