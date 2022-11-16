import Link from "next/link"
import { H3, H4 } from "../../components/headers"
import SecondaryButton from "../../components/secondary-button"

const ApplicationGuidance = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="KMITL-Glasgow" />
      </section>

      <section className="mb-8">
        <H4 style="text-accent font-bold mb-4" text="Application Guidance" />
        <ul className="list-decimal list-inside text-sm sm:text-base md:text-lg lg:text-xl md:text-justify space-y-2">
          <li>
            On the UCAS website above, choose Undergraduate 20xx entry, where
            20xx is the year you are planning to enter UoG, and then select
            &quot;Apply&quot;. This should lead you to the application system.
            You first need to <b>register</b>. Make sure you provide an email
            address that you check regularly (could be @kmitl.ac.th address or
            your personal email address). Your given names and your last name
            that you enter when registering should be spelled exactly as written
            in your passport. If there is any field in the registration form
            that is unclear, click on ? or &quot;Help&quot; to see an
            explanation. After you have registered, you will receive an email
            from UCAS asking you to verify your email address. You should follow
            the instruction in the email.
          </li>
          <div className="divider"></div>
          <li>
            After you have registered, you can then login to start filling in
            your application. When asked how you are applying, you should
            specify that you apply as &quot;<b>individual</b>&quot; (thus a
            &quot;buzzword&quot; is not required).
          </li>
          <div className="divider"></div>
          <li>
            When asked which program to apply, choose{" "}
            <b>BSc (Hons) Software Engineering</b> program at the University of
            Glasgow (UCAS <b>G430</b>) for entry into <b>Year 3</b> of the
            program.
          </li>
          <div className="divider"></div>
          <li>
            You must include a short <b>personal statement</b>. The statement
            should include your reason for choosing software engineering as your
            program of study, your reason for choosing the KMITL-Glasgow
            Double-Degree Program in Software Engineering, and your future plan
            after your graduate.
          </li>
          <div className="divider"></div>
          <li>
            Reference letters are <b>not</b> needed.
          </li>
          <div className="divider"></div>
          <li>
            When you submit your application, you will be asked to pay the{" "}
            <b>application fee</b> using a credit card. You can ask someone else
            to pay for you using their credit card. If the credit card you use
            does not work, try another one.
          </li>
          <div className="divider"></div>
          <li>
            After you have submitted your UCAS application, notify the SE
            program director that your have done so <b>within 30 June</b>. Also
            send a copy of your IELTS score report to the program director. The
            program director will forward your IELTS score report together with
            your transcript to the admissions office at UoG. There is no need to
            send us your transcript as we can obtain it by ourselves.
          </li>
          <div className="divider"></div>
          <li>
            If you satisfy all the requirements, UoG will notify you with an{" "}
            <b>unconditional offer</b> via email. If not, UoG will send you a{" "}
            <b>conditional offer</b> via email, detailing the conditions that
            you need to satisfy and the deadline (e.g. IELTS score or final GPA
            for Year 2 at KMITL). You must accept the offer within the deadline
            stated in your offer.
          </li>
          <div className="divider"></div>
          <li>
            Once you have been given and accepted an unconditional offer, UoG
            will start preparing a <b>CAS statement</b> for you. UoG will send
            you a <b>draft</b> of your CAS statement for you to check for
            correctness. Your CAS statement is a summary of your personal
            information, educational records, and your program of study in the
            UK. The CAS statement will be stored in an online server accessible
            by UK universities and the UK immigration department (called the
            Home Office). Your CAS statement will be read by the visa staff when
            you apply for a visa. You should check that all the information is
            correct and, in particular, the <b>tuition fee</b> listed in the
            statement is the 20%-discounted rate. Inform UoG if any correction
            is needed.
          </li>
          <div className="divider"></div>
          <li>
            Once you have confirmed that the draft of your CAS statement is
            correct, UoG will email you a copy of your final CAS statement. You
            should print it out and later include it with your visa application.
          </li>
          <div className="divider"></div>
          <li>
            During the same time after you accepted the unconditional offer, you
            will receive some information from UoG&apos;s student services
            regarding the registration, student accommodation, internet account,
            etc via email. You can just response to their request. When you are
            asked to register for courses in the upcoming semester, you can
            ignore that. You are to do the <b>course registration</b> when you
            are in the UK. Your advisor at UoG will help you with the course
            registration when you arrive at UoG.
          </li>
          <div className="divider"></div>
          <li>
            Regarding the <b>accommodation</b>, UoG will send you an application
            form for applying for a{" "}
            <Link href="https://www.gla.ac.uk/undergraduate/accommodation/">
              university accommodation.
            </Link>{" "}
            There is a wide range of options. You can also apply for a private
            student accommodation. For the latter, you can do so by yourself on
            the web any time (even before you receive an offer). You can consult
            the SE students currently studying at Glasgow for advice
            accommodations. For a private accommodation, you could apply even
            before you receive an offer from UoG.
          </li>
          <div className="divider"></div>
          <li>
            After your have received a copy of your final CAS statement in Step
            10 above, you can start applying for your <b>UK visa</b>. See below
            for the visa application guidance.
          </li>
          <div className="divider"></div>
          <li>
            You should plan to arrive at Glasgow at the beginning of the{" "}
            <b>orientation week</b>, which is typically on the Monday in the
            middle of September, or before that.
          </li>
          <div className="divider"></div>
          <li>
            If you have any question or problem on the KMITL-Glasgow
            Double-Degree Program in Software Engineering, please contact the{" "}
            <b>SE program director</b>, &nbsp;
            <a
              className="link link-primary text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
              href="mailto:visit.hi@kmitl.ac.th"
              target="_blank"
              rel="alternate noopener noreferrer"
            >
              Asst.Prof.Dr. Visit Hirankitti
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="flex justify-center mb-8">
        <SecondaryButton
          text="← Back to Page"
          link="/program/kmitl-glasgow"
          style=""
        />
      </section>
    </>
  )
}

export default ApplicationGuidance
