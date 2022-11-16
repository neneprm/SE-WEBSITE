import Link from "next/link"
interface ISolidButton {
  style?: string
  link: string
  text: string
}

const SolidButton: React.FunctionComponent<ISolidButton> = ({
  style,
  link,
  text,
}) => {
  return (
    <Link href={`${link}`}>
      <button className={`btn ${style}`}>{text}</button>
    </Link>
  )
}

export default SolidButton