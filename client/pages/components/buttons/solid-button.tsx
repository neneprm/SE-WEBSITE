import Link from "next/link"
interface ISolidButton {
  style?: string
  link: string
  icon?: JSX.Element
  text: string
}

const SolidButton: React.FunctionComponent<ISolidButton> = ({
  style,
  link,
  icon,
  text,
}) => {
  return (
    <Link href={`${link}`}>
      <button
        className={`btn ${style}`}
      >
        <span className="mr-4">{icon}</span>
        {text}
      </button>
    </Link>
  )
}

export default SolidButton
