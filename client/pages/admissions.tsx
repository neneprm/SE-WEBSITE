import Head from "next/head"
import { H3 } from "./components/headers"
import { FaBullhorn } from "react-icons/fa"
import OneLineCard from "./components/Cards/OneLineCard"
import BorderButton from "./components/Buttons/BorderButton"

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

      <section className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mb-4">
        <BorderButton
          text="Apply admission online"
          link="https://new.reg.kmitl.ac.th/admission"
        />
        <BorderButton
          text="Admission announcement"
          link="https://new.reg.kmitl.ac.th/admission/#/undergraduate/announcement_inter"
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
