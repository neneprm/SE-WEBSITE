import Head from "next/head"
import { H3 } from "../components/headers"

const Lecturers = () => {
  return (
    <>
      <Head>
        <title>SE Lecturers | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="LECTURERS" />
      </section>

      <section>{/* Content */}</section>
    </>
  )
}

export default Lecturers
