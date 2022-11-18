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
      <a className={`btn btn-outline btn-primary ${style}`}>{text}</a>
    </Link>
  )
}

export default BorderButton
