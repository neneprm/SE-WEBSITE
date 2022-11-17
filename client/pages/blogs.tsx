import Head from "next/head"
import { H3 } from "./components/headers"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>SE Blogs | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="BLOGS" />
      </section>

      <section>{/* Content */}</section>
    </>
  )
}

export default Blogs