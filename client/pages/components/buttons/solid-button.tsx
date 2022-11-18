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
      <a className={`btn ${style}`}>
        <span className="mr-4">{icon}</span>
        {text}
      </a>
    </Link>
  )
}

export default SolidButton
