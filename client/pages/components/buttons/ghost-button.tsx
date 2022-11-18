import Link from "next/link"

interface IGhostButton {
  style?: string
  link: string
  text: string
}

const GhostButton: React.FunctionComponent<IGhostButton> = ({
  style,
  link,
  text,
}) => {
  return (
    <Link href={`${link}`}>
      <a
        className={`btn btn-ghost text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-2 ${style}`}
      >
        {text}
      </a>
    </Link>
  )
}
export default GhostButton
