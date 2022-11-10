import { P } from "./headers"

interface ICard {
  cardStyle?: string
  image?: JSX.Element
  icon?: JSX.Element
  titleStyle?: string
  title?: string
  body?: string
}

const CardContent: React.FunctionComponent<ICard> = ({
  cardStyle,
  image,
  icon,
  titleStyle,
  title,
  body,
}) => {
  return (
    <div className={`card bg-base-100 card-bordered shadow-lg ${cardStyle}`}>
      {image}
      <div className="card-body">
        <h2 className={`card-title ${titleStyle}`}>
          <span>{icon}</span>
          {title}
        </h2>
        <P style="pl-3" text={`${body}`} />
      </div>
    </div>
  )
}

export default CardContent
