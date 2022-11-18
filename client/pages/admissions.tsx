import Head from "next/head"

import { FaBullhorn } from "react-icons/fa"

import { H3 } from "./components/headers"
import OneLineCard from "./components/Cards/OneLineCard"
import SolidButton from "./components/Buttons/SolidButton"

interface IAdmission {
  title: string
  link: string
}

const ADMISSION_LIST = [
  {
    title: "Announcement Direct Admissions 1-1 (Early Round) AY 2023",
    link: "https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2397_2022_10_30-20-17-48_c7831.pdf",
  },
  {
    title:
      "Announcement Direct Admissions 1-1 (Early Round) for International Students (non-holders of Thai passport) AY 2023",
    link: "https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2398_2022_10_30-20-17-02_9bb7a.pdf",
  },
]

const Admissions = () => {
  return (
    <>
      <Head>
        <title>SE Admissions | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="ADMISSIONS" />
      </section>

      <section className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mb-8">
        <SolidButton
          text="Apply Admission Online"
          link="https://new.reg.kmitl.ac.th/admission"
          style="md:w-1/2 btn-primary text-base-100 text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-base-100"
        />
        <SolidButton
          text="Admission Announcement"
          link="https://new.reg.kmitl.ac.th/admission/#/undergraduate/announcement_inter"
          style="md:w-1/2 btn-primary text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-base-100"
        />
      </section>

      <section className="mb-8">
        {ADMISSION_LIST.map((list) => (
          <div key={list.link}>
            <OneLineCard
              icon={<FaBullhorn className="text-primary" />}
              title={list.title}
              link={list.link}
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default Admissions
