import Head from "next/head"

import { FaBullhorn } from "react-icons/fa"

import H3 from "../components/headers/H3"
import OneLineCard from "../components/Cards/OneLineCard"
import BorderButton from "../components/Buttons/BorderButton"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"
import SolidButton from "../components/Buttons/SolidButton"

import type { IAnnouncementProp } from "../src/service/admissionService"

interface IAnouncements {
  announcements: IAnnouncementProp[]
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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/admission`)
  const data = await res.json()
  return {
    props: {
      announcements: data.res,
    },
  }
}

const Admissions = ({ announcements }: IAnouncements) => {
  return (
    <>
      <Head>
        <title>SE Admissions | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="ADMISSIONS" />
      </section>

      <section className="flex flex-col justify-center mb-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {/* { admissions.map((admission: { title: any; link: any }) =>(
            <SolidButton
            text={`${admission.title}`}
            link={`${admission.link}`}
            style="md:w-1/2 btn-primary text-base-100 text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-base-100"
          />
          ))} */}
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
        {announcements.map((announcement) => (
          <div key={announcement.title}>
            <OneLineCard
              icon={<FaBullhorn className="text-primary" />}
              title={announcement.title}
              link={announcement.link}
            />
          </div>
        ))}
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton text="← Back to Home" link="/" style="btn-secondary" />
      </section>
    </>
  )
}

export default Admissions
