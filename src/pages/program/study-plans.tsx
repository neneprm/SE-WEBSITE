import Head from "next/head"
import { ChangeEvent, useState } from "react"

import { IoMdClose } from "react-icons/io"
import { IoFilter } from "react-icons/io5"

import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"

import SubjectCard from "../../components/Cards/SubjectCard"
import BorderButton from "../../components/Buttons/BorderButton"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"
import RadioLabel from "../../components/RadioLabel"

import type { ISubjectProp } from "../../service/studyPlanService"
import { env } from "../../env/client.mjs"

interface ISubjects {
  subjects: ISubjectProp[]
}

export async function getServerSideProps() {
  const res = await fetch(`${env.DOMAIN}/api/study_plan`)
  const data = await res.json()
  return {
    props: {
      subjects: data.res,
    },
  }
}

const StudyPlans = ({ subjects }: ISubjects) => {
  const [allSubjects, _setAllSubjects] = useState<ISubjectProp[]>(subjects)
  const [showSubjects, setShowSubjects] = useState<ISubjectProp[]>(allSubjects)

  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [selectedYear, setSelectedYear] = useState<string>("")
  const [selectedSemester, setSelectedSemester] = useState<string>("")
  const [selectedTrack, setSelectedTrack] = useState<string>("")

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShowSubjects(
      allSubjects.filter((subject) => {
        const searchStr = e.target.value.toString()
        const idMatch = subject.id.toLowerCase().includes(searchStr)
        const nameMatch = subject.subject.toLowerCase().includes(searchStr)
        return idMatch || nameMatch
      })
    )
  }

  const filterToggle = (e: ChangeEvent<Element>) => {
    setIsFilter(!isFilter)
    if (isFilter) {
      setShowSubjects(allSubjects)
      setSelectedYear("")
      setSelectedSemester("")
      setSelectedTrack("")
    }
  }

  const filterHandler = () => {
    setShowSubjects(
      allSubjects.filter((subject) => {
        const yearMatch = subject.year.match(selectedYear)
        const semesterMatch = subject.semester.match(selectedSemester)
        const trackMatch = (subject.track ? subject.track : "None")
          .toLowerCase()
          .match(selectedTrack.toLowerCase())
        return yearMatch && semesterMatch && trackMatch
      })
    )
  }

  const selectYearHandler = (e: ChangeEvent<Element>) => {
    setSelectedYear(e.target.id.toLowerCase())
  }

  const selectSemesterHandler = (e: ChangeEvent<Element>) => {
    setSelectedSemester(e.target.id.toLowerCase())
  }

  const selectTrackHandler = (e: ChangeEvent<Element>) => {
    setSelectedTrack(e.target.id.toLowerCase())
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
              onChange={searchHandler}
            />
          </div>
          {/* Filter */}
          <label className="btn btn-circle btn-accent btn-sm swap swap-rotate">
            <input type="checkbox" onChange={filterToggle} />
            <IoFilter className="text-lg swap-off text-base-100" />
            <IoMdClose className="text-lg swap-on text-base-100" />
          </label>
        </div>

        {/* Filter Card */}
        {isFilter && (
          <div className="mb-8 shadow-lg card bg-base-100 card-bordered card-body">
            <div className="flex flex-col xl:flex-row xl:justify-between 2xl:justify-evenly">
              {/* Year */}
              <div className="form-control">
                <H4 text="Year" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="1"
                  group="year"
                  text="Year 1"
                  handleChange={(e) => {
                    selectYearHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="2"
                  group="year"
                  text="Year 2"
                  handleChange={(e) => {
                    selectYearHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="3"
                  group="year"
                  text="Year 3"
                  handleChange={(e) => {
                    selectYearHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="4"
                  group="year"
                  text="Year 4"
                  handleChange={(e) => {
                    selectYearHandler(e)
                    filterHandler()
                  }}
                />
              </div>
              {/* Semester */}
              <div className="form-control">
                <H4 text="Semester" style="ml-1 mb-2 font-bold text-accent" />
                <RadioLabel
                  idfor="1"
                  group="semester"
                  text="Semester 1"
                  handleChange={(e) => {
                    selectSemesterHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="2"
                  group="semester"
                  text="Semester 2"
                  handleChange={(e) => {
                    selectSemesterHandler(e)
                    filterHandler()
                  }}
                />
              </div>
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
                  handleChange={(e) => {
                    selectTrackHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="iot"
                  group="specializations"
                  text="Industrial IoT"
                  handleChange={(e) => {
                    selectTrackHandler(e)
                    filterHandler()
                  }}
                />
                <RadioLabel
                  idfor="ai"
                  group="specializations"
                  text="AI"
                  handleChange={(e) => {
                    selectTrackHandler(e)
                    filterHandler()
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8 space-y-4">
        {showSubjects.map((subject) => (
          <div key={`${subject.id}_${subject.semester}`}>
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
              track={subject.track}
            />
          </div>
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
