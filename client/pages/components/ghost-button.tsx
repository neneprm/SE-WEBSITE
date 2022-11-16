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
      <button
        className={`btn btn-ghost text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-2 ${style}`}
      >
        {text}
      </button>
    </Link>
  )
}
export default GhostButton
