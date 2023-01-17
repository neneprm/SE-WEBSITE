import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import {
  FaScroll,
  FaGraduationCap,
  FaPlane,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa"
import HeroArt from "./assets/hero.svg"
import SeLogo from "./assets/se-logo.png"
import CurriculumCover from "../pages/assets/program/curriculum-cover.jpg"
import GlasgowCover from "../pages/assets/program/glasgow-cover.jpg"
import ExchangeStudyCover from "../pages/assets/program/exchange-study-cover.jpg"

import H1 from "../components/headers/H1"
import H3 from "../components/headers/H3"
import H4 from "../components/headers/H4"
import P from "../components/headers/P"
import ReadMoreCard from "../components/Cards/ReadMoreCard"
import OneLineCard from "../components/Cards/OneLineCard"
import SolidButton from "../components/Buttons/SolidButton"
import BorderButton from "../components/Buttons/BorderButton"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"

import { IAnnouncementProp } from "../service/admissionService"
import { env } from "../env/client.mjs"

interface IAnnouncements {
  announcements: IAnnouncementProp[]
}

export async function getServerSideProps() {
  const res = await fetch(`${env.DOMAIN}/api/admission`)
  const data = await res.json()
  return {
    props: {
      announcements: data.res,
    },
  }
}

const Home = ({ announcements }: IAnnouncements) => {
  return (
    <>
      <Head>
        <title>Software Engineering | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      {/* Hero */}
      <section className="min-h-screen hero bg-base-100 2xl:min-h-max 2xl:py-40">
        <div className="flex-col min-w-full hero-content lg:flex-row justify-evenly 2xl:justify-center 2xl:space-x-24">
          <div className="max-w-xs lg:max-w-md">
            <Image src={HeroArt} alt="Hero Art" />
          </div>
          <span className="mt-8 text-center md:mt-4 lg:text-right">
            <div className="w-20 mx-auto mb-2 md:w-32 lg:mx-0 lg:ml-auto md:mb-4">
              <Image src={SeLogo} alt="SE Logo" />
            </div>
            <H1 style="font-bold text-gradient" text="SOFTWARE" />
            <H1 style="font-bold mb-2 md:mb-6" text="ENGINEERING" />
            <H3 style="mb-3" text="Bachelor of Engineering" />
            <H4 text="Become professional software developers" />
            <H4 text="Change the world with lines of code" />
          </span>
        </div>
      </section>

      {/* About SE */}
      <section className="my-8 lg:-mt-8">
        <H4
          style="font-bold text-gradient -mt-16 md:-mt-4 mb-4 2xl:mt-0"
          text="What is Software Engineering?"
        />
        <div className={`card bg-base-100 card-bordered shadow-lg max-w-fit`}>
          <div className="items-center text-center card-body">
            <FaLaptopCode className="text-4xl text-secondary " />
            <P
              text="Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources."
              style="p-2"
            />
            <div className="justify-center card-actions md:justify-end">
              <Link href="/about">
                <a className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                  Read more →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <H4 style="font-bold text-gradient mt-4 mb-4" text="Forum" /> */}
      {/* <H4 style="font-bold text-gradient mb-4" text="Blogs" /> */}

      {/* Programs */}
      {/* Desktop */}
      <section className="hidden mb-8 xl:block">
        <H4 style="font-bold text-gradient mb-4" text="Program" />
        <div className="w-full shadow-lg card bg-base-100 card-bordered card-body lg:p-12">
          <div className="flex flex-row justify-center space-x-4">
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
              image={ExchangeStudyCover}
              imageAlt="exchange-study-cover"
              title="Exchange Study"
              icon={<FaPlane className="text-primary" />}
              body=""
              link="/program/exchange-study"
            />
          </div>
          <div className="justify-center mt-4 card-actions lg:mt-8">
            <BorderButton
              text="More program →"
              link="/program"
              style="w-full md:btn-wide"
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="mb-8 xl:hidden">
        <H4 style="font-bold text-gradient mb-4" text="Program" />
        <div className="flex flex-col space-y-4">
          <SolidButton
            style="btn-accent text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-base-100 h-20 justify-start"
            text="CURRICULUM"
            link="/program/curriculum"
            icon={<FaScroll className="text-secondary" />}
          />
          <SolidButton
            style="btn-accent text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-base-100 h-20 justify-start"
            text="KMITL-GLASGOW"
            link="/program/kmitl-glasgow"
            icon={<FaGraduationCap className="text-secondary" />}
          />
          <SolidButton
            style="btn-accent text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-base-100 h-20 justify-start"
            text="EXCHANGE STUDY"
            link="/program/exchange-study"
            icon={<FaPlane className="text-secondary" />}
          />
        </div>
        <div className="justify-center mt-4 card-actions lg:mt-8">
          <BorderButton
            text="More program →"
            link="/program"
            style="w-full md:btn-wide"
          />
        </div>
      </section>

      {/* Admissions */}
      <section className="flex flex-col mb-8">
        <H4 style="font-bold text-gradient mb-4" text="Admissions" />
        {announcements.map((announcement) => (
          <div key={announcement.title}>
            <OneLineCard
              icon={<FaBullhorn className="text-primary" />}
              title={announcement.title}
              link={announcement.link}
            />
          </div>
        ))}
        <BorderButton
          text="More announcement →"
          link="/admissions"
          style="mt-4 mx-auto w-full md:btn-wide"
        />
      </section>
    </>
  )
}

export default Home
