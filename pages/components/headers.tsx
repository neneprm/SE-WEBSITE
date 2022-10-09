interface IHeader {
    text: string,
    style?: string
}

interface ICard {
    title: string,
    body: string,
    action: string
}

const H1: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${style}`}>{text}</h1>
    )
}
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
const Card: React.FunctionComponent<ICard> = ({ title, body, action }) => {
    return (
        <div className="card w-96 bg-base-100 card-bordered shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <button className="btn">{action}</button>
                </div>
            </div>
        </div>
    )
}

export { H1, H3, H4, P, Card }