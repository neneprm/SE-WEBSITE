import Head from "next/head"
import Link from "next/link"

import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import P from "../../components/headers/P"
import SubjectCard from "../../components/Cards/SubjectCard"
import BorderButton from "../../components/Buttons/BorderButton"

const StudyPlans = () => {
  return (
    <>
      <Head>
        <title>SE Study Plans | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="STUDY PLANS" />
      </section>

      <section className="mb-8">
        <H4
          style="text-primary font-bold"
          text="Bachelor of Engineering in Software Engineering "
        />
        <br />
        <div className="flex">
          <div className="flex-auto">
            <H4 style="text-base" text="University" />
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="university"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">KMITL</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="university"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Glasgow</span>
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <H4 style="text-base" text="Specializations" />
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="specializations"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Enterprise SE</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="specializations"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Internet of Things</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="specializations"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Intelligent Systems</span>
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <H4 style="text-base" text="Year" />
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="year"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Year 1</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="year"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Year 2</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="year"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Year 3</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="year"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Year 4</span>
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <H4 style="text-base" text="Semester" />
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Semester 1</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Semester 2</span>
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <H4 style="text-base" text="Elective" />
            <div className="flex">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="elective"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Major Elective</span>
              </label>
            </div>
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="elective"
                  className="radio checked:bg-primary mr-2"
                />
                <span className="label-text">Free Elective</span>
              </label>
            </div>
          </div>
          <div className="flex-auto">
            <H4 style="text-base" text="Search" />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-5"
            />
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-outline btn-primary">
                <Link href="/program/exchange-study-abroad">Submit</Link>
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <SubjectCard
          id="01006710"
          subject="Introduction to Calculus"
          prerequisite="None"
          program="Software Engineering 2022"
          credit="3 (3-0-6)"
          description="Functions, limits, continuity and their applications, Mathematical induction, Introduction to derivative, Differentiation, Applications of derivative, Definite integrals, Antiderivative integration, Application of definite integral, Indeterminate forms, Improper integrals, Numerical integration, Sequences and series of numbers, Taylor series expansions of elementary functions"
        />
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
