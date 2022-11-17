import Head from "next/head"
import { H3 } from "./components/headers"
import AdmissionCard from "./components/admission-card"
import BorderButton from "./components/border-button"

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
        <AdmissionCard
          title="Announcement Direct Admissions 1-1 (Early Round)"
          link="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2397_2022_10_30-20-17-48_c7831.pdf"
        />
        <AdmissionCard
          title="Announcement Direct Admissions 1-1 (Early Round)"
          link="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2397_2022_10_30-20-17-48_c7831.pdf"
        />
        <AdmissionCard
          title="Announcement Direct Admissions 1-1 (Early Round)"
          link="https://reg.kmitl.ac.th/TCAS_old/news/files/2566_1_news1_2397_2022_10_30-20-17-48_c7831.pdf"
        />
      </section>
    </>
  )
}

export default Admissions
