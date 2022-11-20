interface IHeader {
    text: string
    style?: string
  }
  
const H4: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <h4
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl ${style}`}
      >
        {text}
      </h4>
    )
}
export default H4