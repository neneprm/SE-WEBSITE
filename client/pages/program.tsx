import { H3 } from "./components/headers"
import Card from "./components/Cards/ReadMoreCard"
import CurriculumCover from "../pages/assets/program/curriculum-cover.jpg"
import GlasgowCover from "../pages/assets/program/glasgow-cover.jpg"
import StudyPlansCover from "../pages/assets/program/study-plans-cover.jpg"
import ExchangeStudyCover from "../pages/assets/program/exchange-study-cover.jpg"
import InternshipsCover from "../pages/assets/program/internships-cover.jpg"
import LecturersCover from "../pages/assets/program/lecturers-cover.jpg"

import {
  FaScroll,
  FaGraduationCap,
  FaCalendar,
  FaPlane,
  FaSuitcase,
} from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import Head from "next/head"

const Program = () => {
  return (
    <>
      <Head>
        <title>SE Program | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="PROGRAM" />
      </section>

      <section className="grid gap-3 mb-8 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:mx-92 2xl:mx-96">
        <Card
          image={CurriculumCover}
          imageAlt="curriculum-cover"
          title="Curriculum"
          icon={<FaScroll className="text-primary" />}
          body=""
          link="/program/curriculum"
        />
        <Card
          image={GlasgowCover}
          imageAlt="glasgow-cover"
          title="KMITL-Glasgow"
          icon={<FaGraduationCap className="text-primary" />}
          body=""
          link="/program/kmitl-glasgow"
        />
        <Card
          image={StudyPlansCover}
          imageAlt="study-plans-cover"
          title="Study Plans"
          icon={<FaCalendar className="text-primary" />}
          body=""
          link="/program/study-plans"
        />
        <Card
          image={ExchangeStudyCover}
          imageAlt="exchange-study-cover"
          title="Exchange Study"
          icon={<FaPlane className="text-primary" />}
          body=""
          link="/program/exchange-study"
        />
        <Card
          image={InternshipsCover}
          imageAlt="internships-cover"
          title="Internships"
          icon={<FaSuitcase className="text-primary" />}
          body=""
          link="/program/internships"
        />
        <Card
          image={LecturersCover}
          imageAlt="lecturers-cover"
          title="Lecturers"
          icon={<BsPeopleFill className="text-primary" />}
          body=""
          link="/program/lecturers"
        />
      </section>
    </>
  )
}

export default Program
