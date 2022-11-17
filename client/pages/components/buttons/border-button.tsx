import Link from "next/link"
interface IBorderButton {
  style?: string
  link: string
  text: string
}

const BorderButton: React.FunctionComponent<IBorderButton> = ({
  style,
  link,
  text,
}) => {
  return (
    <Link href={`${link}`}>
      <button className={`btn btn-outline btn-primary ${style}`}>{text}</button>
    </Link>
  )
}

export default BorderButton
