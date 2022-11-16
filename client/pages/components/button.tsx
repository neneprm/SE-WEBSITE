import { useState } from "react"
import Link from "next/link"

interface IButton {
  style?: string
  link: string
  text: string
}

const Button: React.FunctionComponent<IButton> = ({ style, link, text }) => {
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
export default Button
