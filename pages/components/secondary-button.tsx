import Link from "next/link"
interface ISecondaryButton {
  style?: string
  link: string
  text: string
}

const SecondaryButton: React.FunctionComponent<ISecondaryButton> = ({
  style,
  link,
  text,
}) => {
  return (
    <Link href={`${link}`}>
      <button
        className={`btn btn-outline btn-primary ${style}`}
      >
        {text}
      </button>
    </Link>
  )
}

export default SecondaryButton
