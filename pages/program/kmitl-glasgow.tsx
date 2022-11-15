import Link from "next/link"
import { H3, H4, P } from "../components/headers"
import Card from "../components/card"
import SecondaryButton from "../components/secondary-button"

const KmitlGlasgow = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="KMITL-Glasgow" />
      </section>

      <Card
        titleStyle="text-primary"
        title="About University of Glasgow"
        link="https://www.gla.ac.uk/"
        body="Founded in 1451, the University of Glasgow(Glasgow, United Kingdom) is one of the oldest universities in the world, and has been ranked asone of the world's top 100 universities. With its long history in advanced research, the University of Glasgow has been home tosix Nobel-prize winners. The University'sSchool of Computing Sciencehas consistently been ranked in theUK's top 10 in computing. Glasgow's Software Engineering programis one of the first programs in the world that specialize in software engineering and is highly respected by software industry."
      />

      <section className="my-8">
        <H4 style="text-accent font-bold mb-4" text="Admission" />
        <P text="Requirements for the students who wish to join this double-degree program:" />
        <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            Completed Year 2 of the B.Eng. in Software Engineering program with
            GPA of 3.0 or more
          </li>
          <li>IELTS score of 6.5 or more, with no subtest below 6.0</li>
        </ul>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Degrees" />
        <p className="text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
          Students who have completed Year 4 of this double-degree program will
          be awarded a{" "}
          <b>
            BSc Honours degree in Software Engineering from the University of
            Glasgow
          </b>{" "}
          and a <b>B.Eng. degree in Software Engineering from KMITL</b>.
          Students who maintain good academic records during their studies at
          the University of Glasgow will be eligible to transfer to a one-year
          Master program in Software Engineering at the end of Year 4 and
          graduate with the Master of Science degree in Software Engineering
          awarded by University of Glasgow at the end of Year 5.{" "}
        </p>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Tuition Fees" />
        <P text="The tuition fee rates are as follows*:" />
        <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <li>2 years at KMITL, Tuition fee : THB 180,000 per year</li>
          <li>
            2 years at Glasgow, Tuition fee with scholarship : GBP 19,160 per
            year
          </li>
        </ul>
        <br />
        <p className="text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
          * Rates as of Academic Year 2022. Every student joining the
          double-degree program is entitled to the{" "}
          <b>KMITL - Glasgow Undergraduate Scholarship</b> which provides 20%
          reduction from the full tuition-fee rate for international students at
          Glasgow University.
        </p>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Application Procedure" />
        <p className="text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
          Applications for KMITL-Glasgow Double-Degree Program in Software
          Engineering are made when students finish the second semester of Year
          2 of their study in the SE program. Second-year SE students who meet
          the requirements above and wish to apply need to inform the SE program
          director before the end of Year 2 Semester 2 and submit their
          applications on the UCAS system <b>no later than 30 June</b> (of the
          year they are planning to enter UoG) at
          <a href="https://www.ucas.com/students">
            {" "}
            https://www.ucas.com/students.
          </a>
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mb-8">
      <SecondaryButton text="Application Guidance" link="/program/kmitl-glasgow/application-guidance" style="wide md:w-44"/>
      <SecondaryButton text="UK Visa Guidance" link="/program/kmitl-glasgow/visa-guidance" style="wide md:w-44"/>
      </section>
    </>
  )
}

export default KmitlGlasgow
