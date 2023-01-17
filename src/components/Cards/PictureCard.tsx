import Image from "next/image"
import P from "../headers/P"

interface ICard {
  image: string | any
  imageAlt: string
  title: string
  body: string | JSX.IntrinsicElements | JSX.Element
}

const PictureCard: React.FunctionComponent<ICard> = ({
  image,
  imageAlt,
  title,
  body,
}) => {
  return (
    <>
      <div className="card card-bordered bg-base-100 shadow-lg w-full">
        <div className="flex flex-row">
          <div className="w-48 overflow-clip py-8 pl-8">
            <Image src={image} alt={imageAlt} />
          </div>
          <div className="card-body">
            <div className="card-title">
              <P text={title} style="font-bold m-0" />
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl md:text-justify space-y-2">
              <li>sfhkjdf</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PictureCard
