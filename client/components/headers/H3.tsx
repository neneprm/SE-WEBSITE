interface IHeader {
  text: string
  style?: string
}

const H3: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <h3
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ${style}`}
    >
      {text}
    </h3>
  )
}
export default H3