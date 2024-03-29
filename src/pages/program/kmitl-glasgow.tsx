import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import P from "../../components/headers/P"
import BorderButton from "../../components/Buttons/BorderButton"
import SolidButton from "../../components/Buttons/SolidButton"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"

import UoGLogo from "../assets/UoG-logo.png"

const KmitlGlasgow = () => {
  return (
    <>
      <Head>
        <title>SE Double-Degree | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="KMITL-Glasgow" />
      </section>

      <section className="card bg-base-100 card-bordered shadow-lg max-w-fit">
        <div className="card-body">
          <div className="max-w-xs mx-auto">
            <Image src={UoGLogo} alt="UoG-logo" />
          </div>
          <h3 className="card-title text-accent sm:text-lg lg:text-2xl 2xl:text-3xl">
            About University of Glasgow
          </h3>
          <p className="text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
            Founded in 1451, the &nbsp;
            <span className="link link-primary">
              <Link href="https://www.gla.ac.uk/">University of Glasgow</Link>
            </span>
            (Glasgow, United Kingdom) is one of the oldest universities in the
            world, and has been ranked as &nbsp;
            <span className="link link-primary">
              <Link href="https://www.topuniversities.com/universities/university-glasgow">
                one of the world&apos;s top 100 universities
              </Link>
            </span>
            . With its long history in advanced research, the University of
            Glasgow has been home to &nbsp;
            <span className="link link-primary">
              <Link href="https://www.gla.ac.uk/explore/history/fame/">
                six Nobel-prize winners
              </Link>
            </span>
            . The University&apos;s &nbsp;
            <span className="link link-primary">
              <Link href="https://www.gla.ac.uk/schools/computing/">
                School of Computing Science
              </Link>
            </span>
            &nbsp; has consistently been ranked in the &nbsp;
            <span className="link link-primary">
              <Link href="https://www.topuniversities.com/university-rankings/university-subject-rankings/2022/computer-science-information-systems">
                UK&apos;s top school in computing
              </Link>
            </span>
            . Glasgow&apos;s &nbsp;
            <span className="link link-primary">
              <Link href="https://www.gla.ac.uk/undergraduate/degrees/softwareengineering/">
                Software Engineering program
              </Link>
            </span>
            &nbsp; is one of the first programs in the world that specialize in
            software engineering and is highly respected by software industry.
          </p>
        </div>
      </section>

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
          be awarded a
          <b>
            BSc Honours degree in Software Engineering from the University of
            Glasgow
          </b>
          and a <b>B.Eng. degree in Software Engineering from KMITL</b>.
          Students who maintain good academic records during their studies at
          the University of Glasgow will be eligible to transfer to a one-year
          Master program in Software Engineering at the end of Year 4 and
          graduate with the Master of Science degree in Software Engineering
          awarded by University of Glasgow at the end of Year 5.
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
          double-degree program is entitled to the
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
          year they are planning to enter UoG) at &nbsp;
          <a className="link link-primary" href="https://www.ucas.com/students">
            https://www.ucas.com/students.
          </a>
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mb-8">
        <SolidButton
          text="Application Guidance"
          link="/program/kmitl-glasgow/application-guidance"
          style="md:w-1/2 btn-primary text-base-100 text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-base-100"
        />
        <SolidButton
          text="UK Visa Guidance"
          link="/program/kmitl-glasgow/visa-guidance"
          style="md:w-1/2 btn-primary text-sm text-left md:text-justify sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-base-100"
        />
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

export default KmitlGlasgow
