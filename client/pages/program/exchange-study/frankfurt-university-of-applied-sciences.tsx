import Head from "next/head"
import Link from "next/link"

import { H3, H4, P } from "../../components/headers"
import BorderButton from "../../components/Buttons/BorderButton"
import FloatingScrollButton from "../../components/Buttons/FloatingScrollButton"

const TABLE_COST_LIST = [
  {
    expense: "Round-trip flight ticket",
    cost: "47,000 THB",
  },
  {
    expense: "Semester ticket (covering public transport)",
    cost: "330 €",
  },
  {
    expense: "Health insurance (80 € / month)",
    cost: "400 €",
  },
  {
    expense: "Accommodation (280 - 380 € / month)",
    cost: "1,900 €",
  },
  {
    expense: "Food (200 - 400 € / month)",
    cost: "2,000 €",
  },
  {
    expense: "Communication - Internet, cell phone (40 € / month)",
    cost: "200 €",
  },
  {
    expense: "Total per semester (5 months)",
    cost: "≈ 250,000 Baht",
  },
]

const TABLE_SCHEME_LIST = [
  {
    subject_f: "Software Engineering - Design",
    ects: "5",
    subject_k: "Software Design and Architecture",
    credit: "3",
  },
  {
    subject_f: "Realtime Systems",
    ects: "5",
    subject_k:
      "Advanced Topics in Software Engineering (SE Track) Embedded System Software (IoT Track)",
    credit: "3",
  },
  {
    subject_f: "IT Security",
    ects: "5",
    subject_k: "IT Security",
    credit: "3",
  },
  {
    subject_f: "Distributed Systems",
    ects: "5",
    subject_k: "Distributed Computing",
    credit: "3",
  },
  {
    subject_f: "Programming Exercises",
    ects: "5",
    subject_k: "Team Software Project",
    credit: "3",
  },
]

const ApplicationGuidance = () => {
  return (
    <>
      <Head>
        <title>SE Exchange Study | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3
          style="text-gradient font-bold text-center"
          text="Frankfurt University of Applied Sciences"
        />
      </section>

      <section>
        <div className="card bg-base-100 card-bordered shadow-lg max-w-fit">
          <div className="card-body">
            <P text="Frankfurt University of Applied Sciences (abbreviated as FRA-UAS) is a large practice-oriented higher-education institute specializing in science and technology. The University is located near the center of Frankfurt am Main, a city which is considered a multicultural city and the largest financial center in Continental Europe. It has a highly international student body, with over 10,000 students from more than 100 countries. The University has more than 650 academic staff and 220 administrative staff. There are four faculties:" />
            <ul className="ml-4 list-disc list-inside md:text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
              <li>Architecture and construction</li>
              <li>Informatics and engineering</li>
              <li>Business and law</li>
              <li>Social work and health</li>
            </ul>
            <P text="The degree programs in the University adopts a bi-semester system. Each semester is 19-week long, with 15 weeks of teaching. The semester times are as follows:" />
            <ul className="ml-4 list-disc list-inside md:text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
              <li>Winter Semester : October - February</li>
              <li>Summer Semester : Mid March - July</li>
            </ul>
            <P text="FRA-UAS has been offering many postgraduate programs in English and, recently, has started to teach a number of undergraduate courses in English, including the courses in the second year in its Bachelor Program in Computer Science." />
            <div className="card-actions justify-center md:justify-end">
              <Link href="https://www.frankfurt-university.de/en/">
                <a className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                  Read more →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8">
        <H4 style="text-accent font-bold mb-4" text="Exchange Scheme" />
        <P
          style="mb-4"
          text="By joining this exchange program, you are to take the following four mandatory courses in the Bachelor Program in Computer Science at FRA-UAS. The results of the study will be transferred back as the results of the equivalent courses in the SE program (see the table below)."
        />
        <table className="table-auto table-compact w-full text-center my-4">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-primary to-secondary rounded-tl-xl">
                Courses at FRA-UAS
              </th>
              <th className="bg-gradient-to-l from-primary to-secondary">
                ECTS
              </th>
              <th className="bg-gradient-to-r from-primary to-secondary">
                Courses at KMITL
              </th>
              <th className="bg-gradient-to-l from-primary to-secondary  rounded-tr-xl">
                Credit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            {TABLE_SCHEME_LIST.map((row, index) => {
              return (
                <tr
                  className="font-normal text-sm sm:text-base md:text-lg lg:text-xl"
                  key={index}
                >
                  <td>{row.subject_f}</td>
                  <td>{row.ects}</td>
                  <td>{row.subject_k}</td>
                  <td>{row.credit}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <P text="Additionally, in each year, there are 1 - 3 courses in the M.Sc. in High Integrity Systems program at FRA-UAS with transferable credits which you may take. The list of the courses is to be announced a few months before the exchange begins." />

        <P
          style="my-4"
          text="The following courses are the courses in the SE program in Year 3 Semester 2 which have no equivalent counterpart at FRA-UAS. You are to take these courses in Year 4 Semester 2 instead:"
        />
        <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
          <li>Science & Technology for the Modern World</li>
          <li>
            Software Verification and Validation (unless the M.Sc. course
            &quot;Advanced Testing Techniques&quot; is taken at FRA-UAS)
          </li>
          <li>Software Development Process</li>
          <li>Compiler Construction (for students in the SE track only)</li>
        </ul>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Cost" />
        <P
          style="mb-4"
          text="In accordance with the university's regulation, you are required to pay the normal tuition fee for Year 3 Semester 1 to KMITL as usual. FRA-UAS does not collect additional tuition fee for your study there. You are still required to prepare for other expenses during your period of study at Frankfurt. The following table provides a rough estimate of the essential expenses (not including leisure activities, souvenirs and other unnecessary items):"
        />

        <table className="table-auto table-compact w-full text-center my-4">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-primary to-secondary rounded-tl-xl">
                Expense
              </th>
              <th className="bg-gradient-to-l from-primary to-secondary  rounded-tr-xl">
                Cost : Estimated cost / semester (5 months)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary">
            {TABLE_COST_LIST.map((row, index) => {
              return (
                <tr
                  className="font-normal text-sm sm:text-base md:text-lg lg:text-xl"
                  key={index}
                >
                  <td>{row.expense}</td>
                  <td>{row.cost}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Requirement" />
        <P
          style="mb-2"
          text="The following is the minimum requirement for joining the exchange program at FRA-UAS."
        />
        <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
          <li>Studying in Year 3 Semester 1 of the SE program.</li>
          <li>GPA at the end of Year 2 is 2.7 or higher.</li>
          <li>Excellent English language skills</li>
        </ul>
        <br />
        <P text="Those who do not satisfy these requirements may be accepted at the discretion of the International College and FRA-UAS." />
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Application" />
        <P style="mb-2" text="The application procedure is as follows:" />
        <ul className="lml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
          <li>
            The candidate fills in the International College study abroad
            application form: &nbsp;
            <span className="link link-primary">
              <Link href="https://goo.gl/HPqTbB">https://goo.gl/HPqTbB</Link>
            </span>
          </li>
          <li>
            IC evaluates and selects the candidates and announces the result of
            the selection.
          </li>
          <li>IC nominates the selected candidates to FRA-UAS.</li>
          <li>
            The selected candidates complete the application on FRA-UAS website:
            &nbsp;
            <span className="link link-primary">
              <Link href="https://www.frankfurt-university.de/en/studies/international-office/incomings/exchange/">
                Frankfurt University Exchange
              </Link>
            </span>
          </li>
          <li>
            FRA-UAS emails each candidate an acceptance letter and an
            application form for accommodations.
          </li>
          <li>Accepted candidates start applying for a student visa.</li>
        </ul>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Activity" />
        <ul className="steps steps-vertical">
          <li className="step step-primary font-bold">
            Submit an intent to apply
          </li>
          <li className="step step-primary font-bold">
            Application deadline on FRA-UAS website (strict)
          </li>
          <li className="step step-primary">Arrival at Frankfurt</li>
          <li className="step step-primary">Orientation activities</li>
          <li className="step step-primary">German language course</li>
          <li className="step step-primary">Teaching begins</li>
          <li className="step step-primary">Teaching ends</li>
          <li className="step step-primary">End of exam period</li>
          <li className="step step-primary">
            Start of Academic Year 2019 at KMITL
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Contact" />
        <P text="For all enquiries regarding the exchange study at FRA-UAS, contact:" />
        <a
          className="link link-primary text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
          href="mailto:natthapong.ju@kmitl.ac.th"
          target="_blank"
          rel="alternate noopener noreferrer"
        >
          Dr. Natthapong Jungteerapanich
        </a>
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton
          text="← Back to Page"
          link="/program/exchange-study"
          style=""
        />
      </section>
    </>
  )
}

export default ApplicationGuidance
