import { H3, H4, P } from "../components/headers"
import Card from "../components/card"
import CardContent from "../components/card_content"

const Curriculum = () => {
  return (
    <>
      <section className="container mx-auto mb-4">
        <H3 style="text-gradient font-bold text-center" text="CURRICULUM" />
      </section>

      <section className="mb-8">
        <H4
          style="text-primary font-bold mb-4"
          text="B.Eng. in Software Engineering Program"
        />
        <P text="The B.Eng. in Software Engineering Programis a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering." />
      </section>

      <section className="mb-8">
        <div>
          <CardContent
            cardStyle="w-full"
            titleStyle="text-primary"
            title="Year 1 and Year 2 @KMITL"
            body="In the first two years, the students will study basic courses in mathematics, computer science, and software engineering and develop their programming skills using various programming languages (including Python, C, C++, Java, etc.). Also, the students will be trained to communicate correctly and effectively. At the end of Year 2, every student is required to undertake an internship in a software company for 8 - 10 weeks. All the courses in the first two years will be held at the International College in the Bangkok Campus of KMITL."
          />
          <CardContent
            cardStyle="w-full"
            titleStyle="text-primary"
            title="Year 3 and Year 4 @KMITL"
            body="In Year 3 and Year 4, the students will learn advanced topics in software engineering and important software development methodologies that are used in practice. The students will have opportunities to the apply the knowledge and skills they have acquired to conduct a team software project in Year 3 and a one-year research project in Year 4. Students entering Year 3 are required to take one of the specializations which are Enterprise Software Engineering, Internet of Things, Intelligent Systems. The study plans for these three specializations differ in some required courses. Also the students are recommended to toe work on their senior projects that utilize the knowledge of their respective specializations."
          />
          <CardContent
            cardStyle="w-full"
            titleStyle="text-primary"
            title="Year 3 and Year 4 @Glasgow"
            body="The KMITL-Glasgow Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Glasgow, UK. The program enables qualified students who have completed Year 2 in the SE program at the International College to enter Years 3 and 4 of the Software Engineering program at the University of Glasgow's School of Computing Science. At Glasgow, the student will have an opportunity to study with world-renowned academics, as well as working on team projects with multi-national talents. This is an excellent opportunity for the students who wish to gain studying and living experience in the UK."
          />
        </div>
      </section>

      <section className="mb-8">
        <H4 style="text-primary font-bold mb-4" text="Related documents" />
        <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <a
            className="link link-accent"
            href="https://www.ic.kmitl.ac.th/static/files/SE-TQF2-2017-Rev12.pdf"
          >
            <li>
              Program Specification (TQF2) - B.Eng. in Software Engineering
              (2017 Revision)
            </li>
          </a>
          <a
            className="link link-accent"
            href="https://www.ic.kmitl.ac.th/static/files/SE-TQF2-2011-Rev25.pdf"
          >
            <li>
              Program Specification (TQF2) - B.Eng. in Software Engineering
              (2011 Revision)
            </li>
          </a>
        </ul>
      </section>
    </>
  )
}

export default Curriculum
