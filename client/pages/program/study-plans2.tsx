import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

import { BsFillFilterCircleFill } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { IoFilter } from "react-icons/io5"

import { H3, H4, P } from "../components/headers"
import SubjectCard from "../components/SubjectCard"
import BorderButton from "../components/Buttons/BorderButton"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"
import RadioLabel from "../components/RadioLabel"

const StudyPlans2 = () => {
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

      {/* <section className="mb-8 flex justify-end">
        <div className="form-control">
          <div className="input">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-ghost btn-circle">
              <BiSearch className="" />
            </button>
          </div>
        </div>
      </section> */}

      <section className="">
        <div className="flex justify-end mb-2">
          <label className="btn btn-circle btn-accent swap swap-rotate">
            <input type="checkbox" onChange={handleChange} />
            <IoFilter className="swap-off text-base-100 text-2xl" />
            <IoMdClose className="swap-on text-base-100 text-2xl" />
          </label>
        </div>
        {isChecked && (
          <div className="card bg-base-100 card-bordered shadow-lg card-body">
            <div className="flex flex-col xl:flex-row xl:justify-evenly">
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

      
    </>
  )
}

export default StudyPlans2
