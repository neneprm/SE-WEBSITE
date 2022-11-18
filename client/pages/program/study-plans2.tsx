import Head from "next/head"
import Link from "next/link"

import { H3, H4, P } from "../components/headers"
import SubjectCard from "../components/SubjectCard"
import BorderButton from "../components/Buttons/BorderButton"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"

const StudyPlans2 = () => {
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

      
    </>
  )
}

export default StudyPlans2
