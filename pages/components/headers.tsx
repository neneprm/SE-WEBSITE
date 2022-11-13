interface IHeader {
  text: string
  style?: string
}

const H1: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl ${style}`}>
      {text}
    </h1>
  )
}
const H3: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ${style}`}>
      {text}
    </h3>
  )
}
const H4: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl ${style}`}>
      {text}
    </h4>
  )
}
const P: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <p className={`text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl ${style}`}>
      {text}
    </p>
  )
}

export { H1, H3, H4, P }
