import Link from "next/link"
import { H3, H4, P } from "../components/headers"

const ExchangeStudyAbroad = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3
          style="text-gradient font-bold text-center"
          text="EXCHANGE STUDY"
        />
      </section>
      
      <section className="card bg-base-100 card-bordered shadow-lg">
        <div className="card-body">
          <H4
            style="text-primary font-bold"
            text="Frankfurt University of Applied Sciences, Germany"
          />
          <P text="Qualified students in the SE program have an opportunity to join an exchange study for one semester in Year 3 Semester 2 at Frankfurt University of Applied Sciences (FRA-UAS), our partner university in Germany. The students joining the exchange program will be taking courses in the Bachelor Program in Computer Science at FRA-UAS and the results and credits of the study be transferred back to their study in the SE program." />
          <br />
          <P text="This article provides an overview of the exchange program for the current SE students who wish to undertake an exchange study at FRA-UAS." />
          <div className="card-actions justify-end">
            <button className="btn btn-accent text-base-100">
              <Link href="/program/exchange-study/frankfurt-university-of-applied-sciences">Read more →</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExchangeStudyAbroad
