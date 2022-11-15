import Link from "next/link"
import { H3, H4, P } from "../../components/headers"

const UkVisaGuidance = () => {
  return (
    <>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="KMITL-Glasgow" />
      </section>

      <section className="mb-8">
        <H4 style="text-primary font-bold mb-4" text="UK Visa Guidance" />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          The type of the visa that you should apply is called &quot;General student
          visa (Tier 4)&quot;. You can apply for the visa only after you have
          received your final CAS statement from UoG. But there are some
          necessities that you should prepare even before starting your visa
          application process.&quot;
          <br />
        </p>
        <ul className="list-decimal ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            Make sure you have your passport that is valid for{" "}
            <b>3 more years or longer</b>.
          </li>
          <li>
            Prepare a <b>sufficient amount of money</b> in your parents&apos; bank
            account. The money must be in the account for at least 28 days when
            you apply for a visa. Bank accounts belonging to someone else other
            than yourself or your parents are unacceptable. Only a bank account
            where the money can be readily withdrawn at any time can be used to
            support your application. The minimum amount of money required in
            the bank account is{" "}
            <b>
            &quot;Annual tuition fee listed on CAS statement in GBP&quot; + (&quot;Monthly
              living cost of 1,015 GBP/month&quot; x 9 months)
            </b>
            .
          </li>
          <li>
            Have a <b>Tuberculosis test</b> at an approved testing center to
            obtain a medical certificate. See{" "}
            <a href="https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-thailand/tuberculosis-testing-in-thailand">
              <b>
                https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-thailand/tuberculosis-testing-in-thailand.
              </b>
            </a>
          </li>
          <li>
            Obtain the address of <b>your accommodation</b> in the UK.
          </li>
        </ul>
        <br />
        <P text="Note that you need not purchase your flight ticket before applying for your visa, but you should have a travel plan, i.e. which day your plan to arrive in the UK." />
        <br />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Guidance on how to apply for this type of visa can be found at{" "}
          <a href="https://www.gov.uk/tier-4-general-visa">
            {" "}
            https://www.gov.uk/tier-4-general-visa.
          </a>{" "}
          Below is an overview of the UK visa application procedure.{" "}
        </p>
        <br />
        <ul className="list-decimal ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <li>Fill in and submit the online application form.</li>
          <li>
            Upload all the required supporting documents. Upload the original
            copies. Translations are not needed.
          </li>
          <li>Pay the visa application fee.</li>
          <li>Print out the completed application form.</li>
          <li>
            Make a reservation for a visit to the UK visa application center.
          </li>
          <li>
            Bring your application form, your current passport and all the old
            ones, your medical certificate, and the original version of all your
            supporting documents and go to the visa application center.
          </li>
          <li>
            At the UK visa application center, have your documents checked and
            your fingerprints recorded.
          </li>
          <li>
            Obtain the visa collection slip and the expected visa collection
            date.
          </li>
        </ul>
        <br />
        <P text="If there is no problem with your application, the processing time for General student visa (Tier 4) is normally 2-3 weeks after your visit to the UK visa application center." />
      </section>

      <div className="card-actions justify-end">
        <button className="btn btn-outline btn-primary">
          <Link href="/program/kmitl-glasgow">Back</Link>
        </button>
      </div>
    </>
  )
}

export default UkVisaGuidance
