interface IHeader {
    text: string
    style?: string
  }
  
const P: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <p
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl ${style}`}
      >
        {text}
      </p>
    )
}
export default P