interface IHeader {
  text: string
  style?: string
}

const H4: React.FunctionComponent<IHeader> = ({ style, text }) => {
  return (
    <h4
      className={`text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl ${style}`}
    >
      {text}
    </h4>
  )
}
export default H4