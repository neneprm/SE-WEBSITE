import Link from "next/link"
import { H3, P } from "./headers"

interface ICard {
  cardStyle?: string
  image?: JSX.Element
  icon?: JSX.Element
  titleStyle?: string
  title?: string
  body?: string
  link: string
}

const Card: React.FunctionComponent<ICard> = ({
  cardStyle,
  image,
  icon,
  titleStyle,
  title,
  body,
  link,
}) => {
  return (
    <div className={`card bg-base-100 card-bordered shadow-lg max-w-fit ${cardStyle}`}>
      {image}
      <div className="card-body">
        <h3
          className={`card-title text-base sm:text-lg lg:text-2xl 2xl:text-3xl ${titleStyle}`}
        >
          <span>{icon}</span>
          {title}
        </h3>
        <P text={`${body}`} style="p-2"/>
        <div className="card-actions justify-center md:justify-end">
          <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
            <Link href={`${link}`}>
              <a>Read more →</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
