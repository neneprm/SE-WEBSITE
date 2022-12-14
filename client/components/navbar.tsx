import Image from "next/image"
import logo from "../pages/assets/logo.svg"
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
import NavItem from "./NavItems"

const NAV_LIST = [
  { text: "About", href: "/about" },
  // { text: "Forum", href: "/forum" },
  // { text: "Blogs", href: "/blogs" },
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
          className="btn btn-ghost btn-sm md:btn-md"
          onClick={() => setActiveId(-1)}
        >
          <Link href="/">
            <a className="hover:cursor-pointer w-24 md:w-32 lg:w-48">
              <Image src={logo} alt="Home" />
            </a>
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
                    ? "bg-gradient hover:bg-gradient-focus border-none"
                    : ""
                }
                active={activeId === id}
                {...menu}
              />
            </div>
          ))}
        </div>

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
              {/* <li>
                <Link href="/forum">
                  <a>
                    <HiChatAlt2 className="text-accent" /> Forum
                  </a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blogs">
                  <a>
                    <HiNewspaper className="text-accent" />
                    Blogs
                  </a>
                </Link>
              </li> */}
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
