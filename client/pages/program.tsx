import Head from "next/head"
import {
  FaScroll,
  FaGraduationCap,
  FaCalendar,
  FaPlane,
  FaSuitcase,
} from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import CurriculumCover from "../pages/assets/program/curriculum-cover.jpg"
import GlasgowCover from "../pages/assets/program/glasgow-cover.jpg"
import StudyPlansCover from "../pages/assets/program/study-plans-cover.jpg"
import ExchangeStudyCover from "../pages/assets/program/exchange-study-cover.jpg"
import InternshipsCover from "../pages/assets/program/internships-cover.jpg"
import LecturersCover from "../pages/assets/program/lecturers-cover.jpg"

import { H3 } from "./components/headers"
import ReadMoreCard from "./components/Cards/ReadMoreCard"
import FloatingScrollButton from "./components/Buttons/FloatingScrollButton"
import BorderButton from "./components/Buttons/BorderButton"

const Program = () => {
  return (
    <>
      <Head>
        <title>SE Program | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="PROGRAM" />
      </section>

      <section className="grid grid-flow-row gap-3 mb-8 place-items-center md:grid-cols-2 xl:grid-cols-3">
        <ReadMoreCard
          image={CurriculumCover}
          imageAlt="curriculum-cover"
          title="Curriculum"
          icon={<FaScroll className="text-primary" />}
          body=""
          link="/program/curriculum"
        />
        <ReadMoreCard
          image={GlasgowCover}
          imageAlt="glasgow-cover"
          title="KMITL-Glasgow"
          icon={<FaGraduationCap className="text-primary" />}
          body=""
          link="/program/kmitl-glasgow"
        />
        <ReadMoreCard
          image={StudyPlansCover}
          imageAlt="study-plans-cover"
          title="Study Plans"
          icon={<FaCalendar className="text-primary" />}
          body=""
          link="/program/study-plans"
        />
        <ReadMoreCard
          image={ExchangeStudyCover}
          imageAlt="exchange-study-cover"
          title="Exchange Study"
          icon={<FaPlane className="text-primary" />}
          body=""
          link="/program/exchange-study"
        />
        <ReadMoreCard
          image={InternshipsCover}
          imageAlt="internships-cover"
          title="Internships"
          icon={<FaSuitcase className="text-primary" />}
          body=""
          link="/program/internships"
        />
        <ReadMoreCard
          image={LecturersCover}
          imageAlt="lecturers-cover"
          title="Lecturers"
          icon={<BsPeopleFill className="text-primary" />}
          body=""
          link="/program/lecturers"
        />
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Home"
          link="/"
          style="btn-secondary"
        />
      </section>
    </>
  )
}

export default Program
