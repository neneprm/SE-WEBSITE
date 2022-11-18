import Head from "next/head"
import Link from "next/link"

import { H3, H4, P } from "../components/headers"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"
import BorderButton from "../components/Buttons/BorderButton"

const ExchangeStudyAbroad = () => {
  return (
    <>
      <Head>
        <title>SE Exchange Study | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="EXCHANGE STUDY" />
      </section>

      <section className="mb-8">
        <div className="card bg-base-100 card-bordered shadow-lg">
          <div className="card-body">
            <H4
              style="text-primary font-bold"
              text="Frankfurt University of Applied Sciences, Germany"
            />
            <P text="Qualified students in the SE program have an opportunity to join an exchange study for one semester in Year 3 Semester 2 at Frankfurt University of Applied Sciences (FRA-UAS), our partner university in Germany. The students joining the exchange program will be taking courses in the Bachelor Program in Computer Science at FRA-UAS and the results and credits of the study be transferred back to their study in the SE program." />
            <br />
            <P text="This article provides an overview of the exchange program for the current SE students who wish to undertake an exchange study at FRA-UAS." />
            <div className="card-actions justify-end">
              <Link href="/program/exchange-study/frankfurt-university-of-applied-sciences">
                <a className="btn btn-accent text-base-100">Read more →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Program"
          link="/program"
          style="btn-secondary"
        />
      </section>
    </>
  )
}

export default ExchangeStudyAbroad
