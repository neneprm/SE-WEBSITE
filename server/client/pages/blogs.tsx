import Head from "next/head"

import H3 from "../components/headers/H3"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"
import BorderButton from "../components/Buttons/BorderButton"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>SE Blogs | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="BLOGS" />
      </section>

      <section>{/* Content */}</section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Home"
          link="/"
          style="btn-secondary"
        />
      </section>
    </>
  )
}

export default Blogs
