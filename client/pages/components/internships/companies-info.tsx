import Link from "next/link"
import { H4, P } from "../headers"
const TABLE_LIST = [
  {
    lang: "High-level languages, such as Python, Visual Basic, ActionScript",
    loc: "480 lines",
  },
  {
    lang: "HTML + Mark-up/Scripting languages, such as PHP, JavaScript",
    loc: "840 lines (not including the content of the web pages)",
  },
  {
    lang: "Lower-level languages, such as C, C++, C#, Objective-C, Java",
    loc: "840 lines",
  },
]

const CompaniesInfo = () => {
  return (
    <>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <H4
            style="text-accent font-bold"
            text="Information for Companies"
          />
        </div>
        <div className="collapse-content">
          <P text="Internship is an integral part of the KMITL - Glasgow 2+2 joint study program. Every student joining the 2+2 program is required to undertake an internship to order to simultaneously fulfill the requirements for the following courses:" />
          <ol className="mt-4 list-decimal list-inside text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
            {/* 1. Requirement */}
            <li className="font-bold">Requirements</li>
            {/* Duration and Timing */}
            <P style="font-bold" text="Duration and Timing" />
            <P text="The internship takes place in the summer semester of Year 2 of the program. The student is expected to work full-time for 7 - 10 weeks during late May to early August." />
            {/* Type of Work */}
            <P style="my-2 font-bold" text="Type of Work" />
            <P
              style="mb-2"
              text="Every internship should make use of the student’s software engineering skills. The internship should be practical software engineering work either as an individual project or as part of a larger project. Students are expected to be involved in the coding of a software application or a dynamic website. Work consisting entirely of routine testing, internal support, development of a static website, or data entry would not be suitable work."
            />
            <P text="As a guideline, each student is expected to carry out at least the following amount of coding:" />

            <table className="table-auto table-compact w-full text-center my-4">
              <thead>
                <tr>
                  <th className="bg-gradient-to-r from-primary to-secondary rounded-tl-xl">
                    Type of Programming Languages
                  </th>
                  <th className="bg-gradient-to-l from-primary to-secondary  rounded-tr-xl">
                    Amout of coding (not including comment)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary">
                {TABLE_LIST.map((row, index) => {
                  return (
                    <tr
                      className="font-normal text-sm sm:text-base md:text-lg lg:text-xl"
                      key={index}
                    >
                      <td>{row.lang}</td>
                      <td>{row.loc}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <P text="The work the student is assigned to carry out during the internship should have clearly defined objectives which are mutually agreed upon by both the student and the employer. It is acceptable for the internship to change direction as time goes on, provided that new objectives are identified and agreed." />
            <P
              style="my-2"
              text="The following examples illustrate opposite ends of the spectrum of suitable work:"
            />
            <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
              <li>
                At the one end of the spectrum, a student working for a large
                company undertakes small clearly-defined pieces of work within a
                large project. The student must first make a significant effort
                to understand the existing framework, before going on to
                implementation of software components that will fit into that
                framework.
              </li>
              <li>
                At the other end of the spectrum, a student working for a small
                company develops a complete software package. The student first
                identifies the requirements, including a user interface design,
                and continues development through to a prototype implementation.
              </li>
            </ul>
            {/* Supervision */}
            <P style="my-2 font-bold" text="Supervision" />
            <P text="Since the student is likely to be inexperienced and cannot be expected to work without supervision, the company should assign a supervisor to offer advice to the student and monitor the student's progress. The International College will also nominate an internship supervisor who is available for consultation to both the student and the company throughout the internship." />

            {/* 2. Assessments */}
            <li className="font-bold">Assessments</li>
            <P
              text="To assess the student's internship, we kindly ask the company to monitor the student's performance during their internship and complete the internship assessment form. The internship assessment form is a confidential document and should be returned directly to the International College after the student has completed their internship. The assessment by the company is a crucial component which will be used to assess the student."
            />

            {/* 3. Contact */}
            <li className="font-bold">Contact</li>
            <P text="Should the company have any problem, question, or suggestion regarding the internship or would like to recruit our students for internships, please contact the people below:" />
            <div className="flex flex-col md:flex-row">
              <P style="font-bold md:mr-2" text="Internship advisor" />
              <a
                className="link link-primary text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
                href="mailto:natthapong.ju@kmitl.ac.th"
                target="_blank"
                rel="alternate noopener noreferrer"
              >
                Dr. Natthapong Jungteerapanich
              </a>
            </div>
            {/* 5. Download */}
            {/* <li className="mt-8 mb-4 font-bold">Download</li> */}
          </ol>
        </div>
      </div>
    </>
  )
}

export default CompaniesInfo
