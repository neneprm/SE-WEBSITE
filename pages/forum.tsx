interface IHeader {
    text: string,
    style: string
  }

const Forum = () => {
    const H3: React.FunctionComponent<IHeader> = ({ style, text }) => {
        return (
          <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl ${style}`}>{text}</h3>
        )
      }
      const H4: React.FunctionComponent<IHeader> = ({ style, text }) => {
        return (
          <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl ${style}`}>{text}</h4>
        )
      }
      const P: React.FunctionComponent<IHeader> = ({ style, text }) => {
        return (
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${style}`}>{text}</p>
        )
      }
      
    return (
        <div>
            <div className="container mx-auto">
                <H3 style="text-gradient font-bold text-center" text="FORUM"/>
            </div>
        </div>
    )
}

export default Forum