import Head from "next/head"
import { H3 } from "./components/headers"
import GhostButton from "./components/ghost-button"
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

      <section>{/* Content */}</section>

      {/* <section className="h-56 grid grid-cols-2 gap-40 content-center ...">
        <Button
          style="btn-outline border-2 btn-accent"
          link="/admissions/curriculum"
          text="CURRICULUM"
        ></Button>
        <Button
          style="btn-outline border-2 btn-accent"
          link="/admissions/announcement"
          text="ANNOUNCEMENT"
        ></Button>
      </section> */}
    </>
  )
}

export default Admissions
