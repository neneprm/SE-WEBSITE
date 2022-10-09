import Link from "next/link"

import { H3 } from "./components/headers"
import Card from "./components/card";

import { FaScroll, FaGraduationCap, FaCalendar, FaPlane, FaSuitcase } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const Program = () => {
  return (
    <div>
      <div className="container mx-auto">
        <H3 style="text-gradient font-bold text-center" text="PROGRAM" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="Curriculum" icon={<FaScroll className="text-primary" />} link="/program/curriculum" />
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="KMITL-Glasgow" icon={<FaGraduationCap className="text-primary" />} link="/program/kmitl-glasgow" />
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="Study Plans" icon={<FaCalendar className="text-primary" />} link="/program/study-plans" />
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="Exchange Study Abroad" icon={<FaPlane className="text-primary" />} link="/program/exchange-study-abroad" />
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="Internships" icon={<FaSuitcase className="text-primary" />} link="/program/internships" />
        <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>} title="Lecturers" icon={<BsPeopleFill className="text-primary" />} link="/program/lecturers" />
      </div>
    </div>
  )
}

export default Program