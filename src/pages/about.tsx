import Head from "next/head"

import H3 from "../components/headers/H3"
import H4 from "../components/headers/H4"
import P from "../components/headers/P"
import FloatingScrollButton from "../components/Buttons/FloatingScrollButton"
import BorderButton from "../components/Buttons/BorderButton"

const About = () => {
  return (
    <>
      <Head>
        <title>About SE | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingScrollButton />

      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="ABOUT" />
      </section>

      <section className="container mx-auto mb-8">
        <H4
          style="font-bold text-accent mb-4"
          text="What is Software Engineering?"
        />
        <P
          text="Software engineering (SE) is an engineering discipline concerning 
                all aspects of software production, including software analysis, design, development, 
                testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, 
                logic, and computer science in order to produce efficient and reliable software with the available resources."
        />
      </section>

      <section className="container mx-auto mb-8">
        <H4
          style="font-bold text-accent mb-4"
          text="Why study Software Engineering?"
        />
        <P
          text="It is hard to overstate the ubiquity of software nowadays. Every computer system is 
                governed by software. Almost every human activity involves software in some form. Undoubtedly software industry 
                is one of the largest and fastest growing industries in the world. Consequently, skilled software engineers are 
                in high demand worldwide. As software becomes more and more complex, the programming skills and the rudimentary 
                knowledge of software engineering that students obtained from traditional computer science and computer engineering 
                curriculums are insufficient. The development of real-world software applications requires the skills in analysing the 
                problem domain and the customer's requirement and the skills in designing the software from the topmost level down to the 
                implementation level. Moreover, a software engineer must be able to use proper tools, techniques, and methodologies in order 
                to produce the software in an efficient manner."
        />
      </section>

      <section className="container mx-auto mb-8">
        <H4
          style="font-bold text-accent mb-4"
          text="Careers in Software Engineering"
        />
        <P text="There are abundant career opportunities for graduates from the software engineering program." />
        <P
          text="For example, they are software engineers, software architects, software developers on various 
                platforms, including enterprise software, web applications, mobile applications, games, embedded 
                applications, analysts and designers of IT systems, IT consultants, software entrepreneurs, etc."
        />
        <P
          text="Nevertheless, with strong foundation in computer science, mathematics, 
                and software engineering principles, graduates of the SE program may continue their studies at 
                postgraduate level in various software engineering or computing related fields in universities worldwide."
        />
      </section>

      <section className="flex justify-center mb-8">
        <BorderButton text="← Back to Home" link="/" style="btn-secondary" />
      </section>
    </>
  )
}

export default About
