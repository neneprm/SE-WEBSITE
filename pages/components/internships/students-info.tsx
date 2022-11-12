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

const StudentInfo = () => {
  return (
    <>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <H4 style="text-accent font-bold" text="Information for Students" />
        </div>
        <div className="collapse-content">
          <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg lg:text-xl">
            {/* 1. Requirement */}
            <li className="mb-4 font-bold">Requirements</li>
            {/* Duration and Timing */}
            <P style="font-bold" text="Duration and Timing" />
            <P text="The internship takes place in the summer semester of Year 2 of the program (late May - late July). The internship must consist of at least 7 weeks of full-time work. It may be longer if you wish." />
            {/* Type of Work */}
            <P style="my-2 font-bold" text="Type of Work" />
            <P
              style="mb-2"
              text="An internship provides a excellent opportunity for you to apply your software engineering skills in the real world. The internship should be practical software engineering work, either as an individual project or as part of a larger project. You are expected to be involved in the coding of a software application or a dynamic website. Work consisting entirely of routine testing, internal support, development of a static website, or data entry would not be suitable."
            />
            <P text="As a guideline, you are expected to carry out at least the following amount of coding:" />

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
            <P text="At the beginning of the internship, you and your employer should agree on a clearly defined set of objectives of your work. It is acceptable for the internship to change direction as time goes on, provided that new objectives are identified and agreed." />
            <P
              style="my-2"
              text="The following examples illustrate opposite ends of the spectrum of suitable work:"
            />
            <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              <li className="my-2">
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
            <P text="Normally, the host company of your internship will assign a member of the company to be your supervisor. The supervisor will oversee the progress of your work and give you advice. The International College will also nominate one or more lecturers to be your internship advisors who will be available for consultation to both you and the company." />

            {/* 2. Assessments */}
            <li className="mt-8 mb-4 font-bold">Assessments</li>
            <P
              style="mb-2"
              text="The internship is an assessed component of your study. During the internship, the company will monitor your performance and then submit their assessment to the International College. The company's assessment will cover various aspects of your internship, including:"
            />
            <ol className="ml-4 list-decimal list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              <li>The quality and quantity of your work</li>
              <li>Your attendance record</li>
              <li>
                Other attributes a good software engineer should possess, such
                as punctuality, responsibility, human relations, creativity,
                etc.
              </li>
            </ol>
            <P
              style="my-2"
              text="After your internship, you are required to submit an internship report and give a presentation of your work and your internship experience to the internship assessment committee. The committee will then evaluate your internship and give you either grade S (Satisfactory) or U (Unsatisfactory)."
            />
            {/* Internship Report */}
            <P
              style="mb-2"
              text="An internship report is a short report (1,500 words or more) detailing:"
            />
            <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              <li>
                A brief outline of the company (size, main activities, the
                division or project in which you were employed, etc.)
              </li>
              <li>
                The original placement description and objectives (and any later
                changes to these)
              </li>
              <li>What you actually did</li>
              <li>
                An honest evaluation of how successfully you achieved your
                objectives
              </li>
              <li>
                A summary of what you learned from working in an industrial
                environment (tools, techniques, processes, group working,
                deadlines)
              </li>
              <li>
                A reflection on the value of the placement, and how it could
                have been better
              </li>
            </ul>
            <P
              style="my-2"
              text="The report should not just be a detailed technical description of what you did. The assessment committee is looking for a coherent, literate report in order to understand how your project fitted into the company you were working for, what you achieved, and your reflections on how the internship fitted into your educational experience."
            />
            <P text="Here are some hints on preparing a good report. Make sure that your report has a clear logical structure – it should not be just an unstructured flow of words telling a story. Avoid simply quoting PR material about the organisation you worked for – think about what the reader needs to know about the organisation in order to understand the context of your work. Do not focus on minute technical detail describing intricate pieces of code that you wrote." />
            <P
              style="my-2"
              text="The biggest problem for most students seems to be reflecting on the internship experience. Here are some questions you might like to think about in developing this part of the report:"
            />
            <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              <li>What new skills did you learn?</li>
              <li>
                What existing skills did you exercise or improve during the
                internship?
              </li>
              <li>
                Did your internship experience reinforce your existing
                knowledge? (Did you observe techniques taught at the
                International College actually used in practice?)
              </li>
              <li>
                Were there any techniques that you would like to have known
                before undertaking the internship?
              </li>
              <li>How could the internship experience have been improved?</li>
              <li>
                What knowledge and experience will you take forward as the most
                important lessons from your internship?
              </li>
            </ul>
            <P
              style="mt-2"
              text="Both the content of the report and the quality of writing will be taken into account."
            />
            {/* Presentation */}
            <P style="my-2 font-bold" text="Presentation" />
            <P text="After your internship, you are required to present your work and your experience during the internship to the assessment committee and your colleagues. You should plan for a 20-minute presentation, which will be followed by a 10-minute QA session." />

            {/* Absence during internship */}
            <P style="my-2 font-bold" text="Absence during Internship" />
            <P text="If, for any reason, you need to take a leave during the internship, you must ask for permission from the company. You must also submit a document supporting the request for your leave to your supervisor in the company (or a person who makes a record of your attendance). Absence without notice will result in failing the internship." />

            {/* 3. Procedure */}
            <li className="mt-8 mb-4 font-bold">Procedure</li>
            <div className="flex justify-center">
              <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Apply for internship</li>
                <li className="step step-primary">Registration (online)</li>
                <li className="step step-primary">Pre-internship meeting</li>
                <li className="step step-primary">Internship</li>
                <li className="step step-primary">
                  Presentation & assessment{" "}
                </li>
              </ul>
            </div>
            {/* Description */}
            <ol className="ml-4 list-decimal list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              <li className="my-2">
                Every student who is planning to undertake an internship in the
                upcoming summer semester must apply for an internship position
                in a company.
              </li>
              <li>
                Every student taking an internship must register for the course
                &nbsp;
                <span className="font-bold">
                  "13016004 Software Industrial Internship in Summer"
                </span>
                . Registration is done on the University's online registry
                system. If this course is the only course you register in the
                summer semester, you will not be charged the tuition fee.
              </li>
              <li className="my-2">
                A meeting of all the students taking internships and the
                internship co-ordinator will be held near the end of semester 2.
              </li>
              <li>
                During the internship, you are expected to work full time in the
                host company, and follow the normal regulation of the company.
                Your internship may begin before or finish after this period.
              </li>
              <li className="mt-2">
                After completing the internship, you are required to submit an
                internship report and give a presentation to the internship
                assessment committee. Also, submit your internship report.
              </li>
            </ol>

            {/* 4. Contact */}
            <li className="mt-8 mb-4 font-bold">Contact</li>
            <P text="If you have any problem or question, please contact:" />
            <div className="flex flex-col md:flex-row">
              <P style="font-bold md:mr-2" text="Internship advisor" />
              <a
                className="link link-primary"
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

export default StudentInfo
