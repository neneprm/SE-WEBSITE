import React, { useEffect, useState } from "react"
import { HiArrowUp } from "react-icons/hi"

const FloatingScrollButton: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`btn btn-circle z-50 mx-auto btn-secondary text-base-100 font-medium text-xs shadow-md hover:shadow-lg transition bottom-5 right-5 md:bottom-10 md:right-10 fixed ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <HiArrowUp className="mx-auto" />
    </button>
  )
}

export default FloatingScrollButton
