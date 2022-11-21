import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

import { BsFillFilterCircleFill } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { IoFilter } from "react-icons/io5"


import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import P from "../../components/headers/P"
import SubjectCard from "../../components/Cards/SubjectCard"
import BorderButton from "../../components/Buttons/BorderButton"

// import { H3, H4, P } from "../components/headers"
// import SubjectCard from "../components/Cards/SubjectCard"
// import BorderButton from "../components/Buttons/BorderButton"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"
import RadioLabel from "../../components/RadioLabel"

interface IStudyPlans {
  id: string
  subject: string
  prerequisite: string
  program: string
  credit: string
  description: string
}

const COURSE_LIST = [
  {
    id: "01006710",
    subject: "Introduction to Calculus",
    prerequisite: "None",
    program: "Software-Engineering-2022",
    credit: "3 (3-0-6)",
    description:
      "Functions, limits, continuity and their applications, Mathematical induction, Introduction to derivative, Differentiation, Applications of derivative, Definite integrals, Antiderivative integration, Application of definite integral, Indeterminate forms, Improper integrals, Numerical integration, Sequences and series of numbers, Taylor series expansions of elementary functions.",
  },
  {
    id: "01286111",
    subject: "Circuits and Electronics",
    prerequisite: "None",
    program: "Software-Engineering-2022",
    credit: "4 (3-3-8)",
    description:
      "Fundamentals electric circuit. Ohm's law, Kirchhoff's law, Thevenin's and Norton's theorems, superposition, capacitor, Inductor. Semiconductor devices, device current-voltage and frequency characteristics, P-N junction, diode circuits, analysis, and design of BJT and MOS transistor circuits, operational amplifier, and its applications.",
  },
]


const StudyPlans = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <Head>
        <title>SE Study Plans | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="STUDY PLANS" />
      </section>

      <section className="">
        <div className="flex justify-between md:justify-end space-x-4 mb-4 items-center">
          {/* Search bar */}
          <div className="input p-0 ml-2 flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="input input-bordered input-accent input-sm lg:input-md lg:w-72 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
            />
          </div>
          {/* Filter */}
          <label className="btn btn-circle btn-accent btn-sm swap swap-rotate">
            <input type="checkbox" onChange={handleChange} />
            <IoFilter className="swap-off text-base-100  text-lg" />
            <IoMdClose className="swap-on text-base-100 text-lg" />
          </label>
        </div>

        {/* Filter Card */}
        {isChecked && (
          <div className="card bg-base-100 card-bordered shadow-lg card-body mb-8">
            <div className="flex flex-col xl:flex-row xl:justify-between 2xl:justify-evenly">
              {/* Program */}
              <div className="form-control">
                <H4 text="Program" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="kmitl-program"
                  group="program"
                  text="KMITL"
                  check={true}
                />
                <RadioLabel
                  idfor="glasgow-program"
                  group="program"
                  text="KMITL-Glasgow"
                  check={false}
                />
              </div>

              {/* Specializations */}
              <div className="form-control">
                <H4
                  text="Specializations"
                  style="ml-1 mb-2 font-bold text-accent"
                />
                <RadioLabel
                  idfor="metaverse-se"
                  group="specializations"
                  text="Metaverse SE"
                  check={true}
                />
                <RadioLabel
                  idfor="industrial-iot"
                  group="specializations"
                  text="Industrial IoT"
                  check={false}
                />
                <RadioLabel
                  idfor="ai"
                  group="specializations"
                  text="AI"
                  check={false}
                />
              </div>

              {/* Year */}
              <div className="form-control">
                <H4 text="Year" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="year1"
                  group="year"
                  text="Year 1"
                  check={true}
                />
                <RadioLabel
                  idfor="year2"
                  group="year"
                  text="Year 2"
                  check={false}
                />
                <RadioLabel
                  idfor="year3"
                  group="year"
                  text="Year 3"
                  check={false}
                />
                <RadioLabel
                  idfor="year4"
                  group="year"
                  text="Year 4"
                  check={false}
                />
              </div>

              {/* Semester */}
              <div className="form-control">
                <H4 text="Semester" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="semester1"
                  group="semester"
                  text="Semester 1"
                  check={true}
                />
                <RadioLabel
                  idfor="semester2"
                  group="semester"
                  text="Semester 2"
                  check={false}
                />
              </div>

              {/* Elective */}
              <div className="form-control">
                <H4 text="Elective" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="major-elective"
                  group="elective"
                  text="Major Elective"
                  check={true}
                />
                <RadioLabel
                  idfor="free-elective"
                  group="elective"
                  text="Free Elective"
                  check={false}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8 space-y-4">
        {COURSE_LIST.map((course) => (
          <SubjectCard
            id={course.id}
            subject={course.subject}
            prerequisite={course.prerequisite}
            program={course.program}
            credit={course.credit}
            description={course.description}
          />
        ))}
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Program"
          link="/program"
          style="btn-secondary"
        />
      </section>
    </>
  )
}

export default StudyPlans
