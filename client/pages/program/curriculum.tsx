import { H3, H4, P } from "../components/headers"
import Link from "next/link"

const Curriculum = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="CURRICULUM" />
      </section>

      <section className="mb-8">
        <H4
          style="text-accent font-bold mb-4"
          text="B.Eng. in Software Engineering Program"
        />
        <P text="The B.Eng. in Software Engineering Programis a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering." />
      </section>

      <section className="mb-8">
        <div className="card bg-base-100 card-bordered shadow-lg max-w-fit">
          <div className="card-body">
            <h3 className="card-title text-primary sm:text-lg lg:text-2xl 2xl:text-3xl">
              Year 1 and Year 2 @KMITL
            </h3>
            <P
              text="In the first two years, the students will study basic courses in mathematics, computer science, and software engineering and develop their programming skills using various programming languages (including Python, C, C++, Java, etc.). Also, the students will be trained to communicate correctly and effectively. At the end of Year 2, every student is required to undertake an internship in a software company for 8 - 10 weeks. All the courses in the first two years will be held at the International College in the Bangkok Campus of KMITL."
              style="p-2"
            />
            <div className="card-actions justify-center md:justify-end">
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                <Link href="/program/study-plans">Courses details →</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="card bg-base-100 card-bordered shadow-lg max-w-fit">
          <div className="card-body">
            <h3 className="card-title text-primary sm:text-lg lg:text-2xl 2xl:text-3xl">
              Year 3 and Year 4 @KMITL
            </h3>
            <P text="In Year 3 and Year 4, the students will learn advanced topics in software engineering and important software development methodologies that are used in practice. The students will have opportunities to the apply the knowledge and skills they have acquired to conduct a team software project in Year 3 and a one-year research project in Year 4. Students entering Year 3 are required to take one of the following specializations:" />
            <ul className="ml-4 list-disc list-inside text-justify text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
              <li>
                <b> Metaverse Software Engineering</b> - Specializing inlarge
                and complex software for enterprises and digital transformation.
              </li>
              <li>
                <b>Industrial Internet of Things</b> - Specializing in the
                Internet of Things, including embedded and mobile systems.
              </li>
              <li>
                <b>Artificial Intelligence</b> - Specializing in applications of
                artificial intelligence and data science, including machine
                learning and Big Data. The study plans for these three
                specializations differ in some required courses. Also the
                students are recommended to toe work on their senior projects
                that utilize the knowledge of their respective specializations.
              </li>
            </ul>
            <div className="card-actions justify-center md:justify-end">
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                <Link href="/program/study-plans">Courses details →</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="card bg-base-100 card-bordered shadow-lg max-w-fit">
          <div className="card-body">
            <h3 className="card-title text-primary sm:text-lg lg:text-2xl 2xl:text-3xl">
              Year 3 and Year 4 @Glasgow
            </h3>
            <P text="he KMITL-Glasgow Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Glasgow, UK. The program enables qualified students who have completed Year 2 in the SE program at the International College to enter Years 3 and 4 of the Software Engineering program at the University of Glasgow's School of Computing Science. At Glasgow, the student will have an opportunity to study with world-renowned academics, as well as working on team projects with multi-national talents. This is an excellent opportunity for the students who wish to gain studying and living experience in the UK." />
            <div className="card-actions justify-center md:justify-end">
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                <Link href="/program/kmitl-glasgow">Read more →</Link>
              </button>
              <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                <Link href="/program/study-plans">Courses details →</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Curriculum
