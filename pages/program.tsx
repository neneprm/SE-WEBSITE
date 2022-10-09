import Link from "next/link"

import {H3} from "./components/headers"
import { FaScroll, FaGraduationCap, FaCalendar, FaPlane, FaSuitcase} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

interface ICard {
  title: string,
  link: string
  icon: JSX.Element
}

const Program = () => {
  const Card: React.FunctionComponent<ICard> = ({ title, icon, link }) => {
    return (
      <div className="card w-96 bg-base-100 card-bordered">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            <span>
              {icon}
            </span>
            {title}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-accent text-base-100">
              <Link href={`/program/${link}`}><a>Read more →</a></Link>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container mx-auto">
        <H3 style="text-gradient font-bold text-center" text="PROGRAM" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Card title="Curriculum" icon={<FaScroll className="text-primary"/>} link="curriculum" />
        <Card title="KMITL-Glasgow" icon={<FaGraduationCap className="text-primary"/>} link="kmitl-glasgow" />
        <Card title="Study Plans" icon={<FaCalendar className="text-primary"/>} link="study-plans" />
        <Card title="Exchange Study Abroad" icon={<FaPlane className="text-primary"/>} link="exchange-study-abroad" />
        <Card title="Internships" icon={<FaSuitcase className="text-primary"/>} link="internships" />
        <Card title="Lecturers" icon={<BsPeopleFill className="text-primary"/>} link="lecturers" />
      </div>
    </div>
  )
}

export default Program