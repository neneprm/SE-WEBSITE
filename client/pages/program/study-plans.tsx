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
import axios from "axios"

interface IStudyPlans {
  subject_id: string
  subject_name: string
  prerequisite: string
  program: string
  subject_credit: string
  description: string
  semester: string
  track: string
  year: string
}

interface ISubjects {
  subjects: IStudyPlans[]
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

const StudyPlans = ({ subjects }: ISubjects) => {
  const [allSubject, setAllSubject] = useState<IStudyPlans[]>(subjects)
  const [showSubject, setShowSubject] = useState<IStudyPlans[]>(allSubject)

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
        const idMatch = value.subject_id.toLowerCase().includes(searchStr)
        const subjectMatch = value.subject_name
          .toLowerCase()
          .includes(searchStr)
        const prerequisiteMatch = value.prerequisite
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
        <div className="flex justify-between md:justify-end space-x-4 mb-4 items-center">
          {/* Search bar */}
          <div className="input p-0 ml-2 flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="input input-bordered input-accent input-sm lg:input-md lg:w-72 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
              onChange={handleFilter}
            />
          </div>
          {/* Filter */}
          <label className="btn btn-circle btn-accent btn-sm swap swap-rotate">
            <input type="checkbox" onChange={handleFilterCheck} />
            <IoFilter className="swap-off text-base-100  text-lg" />
            <IoMdClose className="swap-on text-base-100 text-lg" />
          </label>
        </div>

        {/* Filter Card */}
        {filterIsChecked && (
          <div className="card bg-base-100 card-bordered shadow-lg card-body mb-8">
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
        {showSubject.map(
          (subject: {
            subject_id: string
            subject_name: string
            subject_credit: string
            prerequisite: string
            description: string
            program: string
            year: string
            semester: string
            track: string
          }) => (
            <div
              key={`${subject.subject_id}_${subject.year}_${subject.semester}`}
            >
              <SubjectCard
                id={subject.subject_id}
                subject={subject.subject_name}
                prerequisite={subject.prerequisite}
                program={subject.program}
                credit={subject.subject_credit}
                description={subject.description}
                year={subject.year}
                semester={subject.semester}
                track={subject.track}
              />
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

export async function getServerSideProps() {
  const { data } = await axios.get("http://127.0.0.1:8000/subjects")
  return {
    props: {
      subjects: data.results,
    },
  }
}

export default StudyPlans
