interface IHeader {
    text: string
    style?: string
  }
  
const H1: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl ${style}`}
      >
        {text}
      </h1>
    )
}
export default H1