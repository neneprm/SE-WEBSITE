import Head from "next/head"
import { useState } from "react"

import { IoMdClose } from "react-icons/io"
import { IoFilter } from "react-icons/io5"

import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"

import SubjectCard from "../../components/Cards/SubjectCard"
import BorderButton from "../../components/Buttons/BorderButton"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"
import RadioLabel from "../../components/RadioLabel"
import { ISubjectProp } from "../../src/service/studyPlanService"

interface ISubjects {
  subjects: ISubjectProp[]
}

const RADIO_LIST = [
  {
    id: "01006710",
    subject: "Introduction to Calculus",
    prerequisite: "None",
    program: "Software-Engineering-2022",
    credit: "3 (3-0-6)",
    description:
      "Functions, limits, continuity and their applications, Mathematical induction, Introduction to derivative, Differentiation, Applications of derivative, Definite integrals, Antiderivative integration, Application of definite integral, Indeterminate forms, Improper integrals, Numerical integration, Sequences and series of numbers, Taylor series expansions of elementary functions.",
  },
]
var checkedYear = "",
  checkedSemester = "",
  checkedTrack = ""

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/study_plan`)
  const data = await res.json()
  return {
    props: {
      subjects: data.res,
    },
  }
}

const StudyPlans = ({ subjects }: ISubjects) => {
  const [allSubject, setAllSubject] = useState<Subject[]>(subjects)
  const [showSubject, setShowSubject] = useState<Subject[]>(allSubject)

  const [filterIsChecked, setFilterIsChecked] = useState(false)
  const handleFilterCheck = (e: any) => {
    setFilterIsChecked(!filterIsChecked)
    if (filterIsChecked) {
      setShowSubject(allSubject)
      ;(checkedYear = ""), (checkedSemester = ""), (checkedTrack = "")
    }
  }

  const [checkedRadio, setCheckedRadio] = useState<[]>([])
  const handleRadioChange = (e: any) => {
    setShowSubject(
      allSubject.filter((value) => {
        const checkedItem = e.target.id.toLowerCase()

        const year = ["year1", "year2", "year3", "year4"]
        const semester = ["semester1", "semester2"]
        const track = ["metaverse", "iot", "ai"]

        if (year.includes(checkedItem)) checkedYear = checkedItem
        else if (semester.includes(checkedItem)) checkedSemester = checkedItem
        else if (track.includes(checkedItem)) checkedTrack = checkedItem

        const yearMatch = ("year" + value.year.toLowerCase()).includes(
          checkedYear
        )
        const semesterMatch = (
          "semester" + value.semester.toLowerCase()
        ).includes(checkedSemester)
        const trackMatch = value.track.toLowerCase().includes(checkedTrack)

        return trackMatch && yearMatch && semesterMatch
      })
    )
  }

  const handleFilter = (e: any) => {
    setShowSubject(
      allSubject.filter((value) => {
        const searchStr = e.target.value.toLowerCase()
        const idMatch = value.id.toLowerCase().includes(searchStr)
        const subjectMatch = value.name
          .toLowerCase()
          .includes(searchStr)
        const prerequisiteMatch = value.prerequisite? value.prerequisite: "None"
          .toLowerCase()
          .includes(searchStr)
        const descriptionMatch = value.description
          .toLowerCase()
          .includes(searchStr)
        return idMatch || subjectMatch || prerequisiteMatch || descriptionMatch
      })
    )
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
        <div className="flex items-center justify-between mb-4 space-x-4 md:justify-end">
          {/* Search bar */}
          <div className="flex items-center p-0 ml-2 input">
            <input
              type="search"
              placeholder="Search..."
              className="text-sm input input-bordered input-accent input-sm lg:input-md lg:w-72 sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
              onChange={handleFilter}
            />
          </div>
          {/* Filter */}
          <label className="btn btn-circle btn-accent btn-sm swap swap-rotate">
            <input type="checkbox" onChange={handleFilterCheck} />
            <IoFilter className="text-lg swap-off text-base-100" />
            <IoMdClose className="text-lg swap-on text-base-100" />
          </label>
        </div>

        {/* Filter Card */}
        {filterIsChecked && (
          <div className="mb-8 shadow-lg card bg-base-100 card-bordered card-body">
            <div className="flex flex-col xl:flex-row xl:justify-between 2xl:justify-evenly">
              {/* Specializations */}
              <div className="form-control">
                <H4
                  text="Specializations"
                  style="ml-1 mb-2 font-bold text-accent"
                />
                <RadioLabel
                  idfor="metaverse"
                  group="specializations"
                  text="Metaverse"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="iot"
                  group="specializations"
                  text="Industrial IoT"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="ai"
                  group="specializations"
                  text="AI"
                  handleChange={handleRadioChange}
                />
              </div>

              {/* Year */}
              <div className="form-control">
                <H4 text="Year" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="Year1"
                  group="year"
                  text="Year 1"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="Year2"
                  group="year"
                  text="Year 2"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="Year3"
                  group="year"
                  text="Year 3"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="Year4"
                  group="year"
                  text="Year 4"
                  handleChange={handleRadioChange}
                />
              </div>

              {/* Semester */}
              <div className="form-control">
                <H4 text="Semester" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="Semester1"
                  group="semester"
                  text="Semester 1"
                  handleChange={handleRadioChange}
                />
                <RadioLabel
                  idfor="Semester2"
                  group="semester"
                  text="Semester 2"
                  handleChange={handleRadioChange}
                />
              </div>
            </div>
          </div>
        )}
      </section>
      
      <section className="mb-8 space-y-4">
        {subjects.map(
          (subject) => (
            <div
              key={`${subject.id}`}
            >
              <SubjectCard
                id={subject.id}
                subject={subject.subject}
                prerequisite={subject.prerequisite}
                program={subject.program}
                credit={subject.credit}
                lectureHour={subject.lectureHour}
                labHour={subject.labHour}
                studyHour={subject.studyHour}
                description={subject.description}
                year={subject.year}
                semester={subject.semester}
                track={subject.track}               />
            </div>
          )
        )}
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
