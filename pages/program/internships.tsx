import { H3, H4, P } from "../components/headers"
import StudentInfo from "../components/internships/students-info"

const Internships = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="INTERNSHIPS" />
      </section>
      <section className="mb-8">
        <H4 style="font-bold mb-4 text-primary" text="Software Industrial Internships" />
        <P text="The Software Industrial Internship is a required component of the B.Eng. in Software Engineering program. The objectives are for the students to gain work experience in the software industry and to understand the role of a software engineer in business and the society. Every student is expected to undertake an internship position related to software development in a company in Thailand or abroad during the summer semester at the end of the second year of their study." />
      </section>

      <section className="mb-8 space-y-4">
        <StudentInfo/>
      </section>
    </>
  )
}

export default Internships
