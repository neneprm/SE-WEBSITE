import Link from "next/link"

interface IButton {
  text: string
  link: string
  active: boolean
  focus: string
  last: string
}

const NavItem: React.FunctionComponent<IButton> = ({
  text,
  link,
  active,
  focus,
  last,
}) => {
  return (
    <>
      <Link href={link}>
        <a
          className={`btn btn-ghost text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-2 ${focus} ${last}`}
        >
          {text}
        </a>
      </Link>
    </>
  )
}

export default NavItem
