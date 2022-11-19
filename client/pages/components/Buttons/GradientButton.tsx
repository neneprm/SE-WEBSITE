import { NextPage } from "next"
import Link from "next/link"

interface IGradientButton {
  name: string
  link: string
}

const GradientButton: React.FunctionComponent<IGradientButton> = ({
  name,
  link,
}) => {
  return (
    <Link href={link}>
      <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-accent hover:bg-accent-focus border-none text-base-100">
        {name}
      </a>
    </Link>
  )
}

export default GradientButton
