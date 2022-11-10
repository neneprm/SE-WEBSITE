import Image from "next/image"
import logo from "../assets/logo.svg"
import {
  HiMenu,
  HiInformationCircle,
  HiChatAlt2,
  HiNewspaper,
  HiCollection,
  HiPencilAlt,
} from "react-icons/hi"
import { useState } from "react"
import Link from "next/link"
import NavItem from "../components/navitem"

const NAV_LIST = [
  { text: "About", href: "/about" },
  { text: "Forum", href: "/forum" },
  { text: "Blogs", href: "/blogs" },
  { text: "Program", href: "/program" },
  { text: "Admissions", href: "/admissions" },
]

const NavBar = () => {
  const [navActive, setNavActive] = useState(false)
  const [activeId, setActiveId] = useState(-1)

  return (
    <>
      <nav className="navbar">
        {/* Desktop NavBar */}
        <button
          className="font-bold text-gradient sm:text-base md:text-md lg:text-lg"
          onClick={() => setActiveId(-1)}
        >
          <Link href="/">
            <a>SOFTWARE</a>
          </Link>
        </button>
        <div className={`flex-1`}></div>
        <div className={`${navActive} hidden xl:flex`}>
          {NAV_LIST.map((menu, id) => (
            <div
              onClick={() => {
                setActiveId(id)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem
                link={menu.href}
                focus={
                  activeId === id
                    ? "border-0 border-b-[3px] border-gradient"
                    : ""
                }
                last={
                  id === NAV_LIST.length - 1
                    ? "bg-gradient hover:bg-gradient-focus border-none text-base-10"
                    : ""
                }
                active={activeId === id}
                {...menu}
              />
            </div>
          ))}
        </div>
        {/* <a className='hover:cursor-pointer'><Image src={logo} /></a> */}

        {/* Mobile NavBar */}
        <div className="flex-none xl:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <HiMenu className="sm:text-base md:text-md lg:text-lg text-primary hover:text-primary-focus" />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow-xl menu menu-normal dropdown-content bg-base-100 rounded-box w-60 dropdown-open:focus:bg-accent"
            >
              <li>
                <Link href="/about">
                  <a>
                    <HiInformationCircle className="text-accent" /> About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/forum">
                  <a>
                    <HiChatAlt2 className="text-accent" /> Forum
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>
                    <HiNewspaper className="text-accent" />
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/program">
                  <a>
                    <HiCollection className="text-accent" />
                    Program
                  </a>
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/admissions">
                  <a>
                    <HiPencilAlt className="text-secondary" />
                    Admissions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
