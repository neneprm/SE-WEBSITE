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
          <ol className="list-decimal list-inside">
            <li className="mb-4 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              Requirements
              <P style="my-2" text="Duration and Timing" />
              <P
                style="font-normal"
                text="The internship takes place in the summer semester of Year 2 of the program (late May - late July). The internship must consist of at least 7 weeks of full-time work. It may be longer if you wish."
              />
              <P style="my-2" text="Type of Work" />
              <P
                style="font-normal"
                text="An internship provides a excellent opportunity for you to apply your software engineering skills in the real world. The internship should be practical software engineering work, either as an individual project or as part of a larger project. You are expected to be involved in the coding of a software application or a dynamic website. Work consisting entirely of routine testing, internal support, development of a static website, or data entry would not be suitable."
              />
              <P
                style="my-2 font-normal"
                text="As a guideline, you are expected to carry out at least the following amount of coding:"
              />
              <table className="table-auto table-compact w-full text-center my-2">
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
              <P
                style="my-2 font-normal"
                text="At the beginning of the internship, you and your employer should agree on a clearly defined set of objectives of your work. It is acceptable for the internship to change direction as time goes on, provided that new objectives are identified and agreed."
              />
              <P
                style="font-normal"
                text="The following examples illustrate opposite ends of the spectrum of suitable work:"
              />
              <ul className="ml-4 list-disc list-inside font-normal text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                <li>
                  At the one end of the spectrum, a student working for a large
                  company undertakes small clearly-defined pieces of work within
                  a large project. The student must first make a significant
                  effort to understand the existing framework, before going on
                  to implementation of software components that will fit into
                  that framework.
                </li>
                <li>
                  At the other end of the spectrum, a student working for a
                  small company develops a complete software package. The
                  student first identifies the requirements, including a user
                  interface design, and continues development through to a
                  prototype implementation.
                </li>
              </ul>
            </li>

            <li className="text-sm sm:text-base md:text-lg lg:text-xl">
              Assessments
            </li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl">
              Procedure and Timetable
            </li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl">
              Contact
            </li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl">
              Download
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default StudentInfo
