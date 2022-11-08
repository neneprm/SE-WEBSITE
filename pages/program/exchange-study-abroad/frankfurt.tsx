import { H3, H4, P } from "../../components/headers"

const ApplicationGuidance = () => {
    return (
        <div>
            <div className="container mx-auto">
                <H3 style="text-gradient font-bold text-center" text="Frankfurt University of Applied Sciences" />
            </div>
            <section>
                <div>
                    <H4 style="text-primary font-bold" text="About Frankfurt University of Applied Sciences" />
                    <P text="Frankfurt University of Applied Sciences (abbreviated as FRA-UAS) is a large practice-oriented higher-education institute specializing in science and technology. The University is located near the center of Frankfurt am Main, a city which is considered a multicultural city and the largest financial center in Continental Europe. It has a highly international student body, with over 10,000 students from more than 100 countries. The University has more than 650 academic staff and 220 administrative staff. There are four faculties:" />
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>Architecture and construction</li>
                        <li>Informatics and engineering</li>
                        <li>Business and law</li>
                        <li>Social work and health</li>
                    </ul><br />
                    <P text="The degree programs in the University adopts a bi-semester system. Each semester is 19-week long, with 15 weeks of teaching. The semester times are as follows:" />
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>Winter Semester : October – February</li>
                        <li>Summer Semester : Mid March – July</li>
                    </ul><br />
                    <P text="FRA-UAS has been offering many postgraduate programs in English and, recently, has started to teach a number of undergraduate courses in English, including the courses in the second year in its Bachelor Program in Computer Science." />
                    <div className="card-actions justify-end">
                        <button className="btn btn-link">
                            <a href="https://www.frankfurt-university.de/en/">Read more →</a>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <H4 style="text-primary font-bold" text="Exchange Scheme" />
                    <P text="By joining this exchange program, you are to take the following four mandatory courses in the Bachelor Program in Computer Science at FRA-UAS. The results of the study will be transferred back as the results of the equivalent courses in the SE program (see the table below)." />
                    <br/>
                    <div className="overflow-x-auto">
                        <table className="table w-auto m-auto px-10">
                            <thead>
                                <tr>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Courses at FRA-UAS" /></th>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="ECTS" /></th>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Courses at KMITL" /></th>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Credit" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><P text="Software Engineering - Design"/></td>
                                    <td><P style="text-center" text="5"/></td>
                                    <td><P text="Software Design and Architecture"/></td>
                                    <td><P style="text-center" text="3"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Realtime Systems"/></td>
                                    <td><P style="text-center" text="5"/></td>
                                    <td><P text="Advanced Topics in Software Engineering (SE Track) Embedded System Software (Mobile SE Track)"/></td>
                                    <td><P style="text-center" text="3"/></td>
                                </tr><tr>
                                    <td><P text="IT Security"/></td>
                                    <td><P style="text-center" text="5"/></td>
                                    <td><P text="Computer Security"/></td>
                                    <td><P style="text-center" text="3"/></td>
                                </tr><tr>
                                    <td><P text="Distributed Systems"/></td>
                                    <td><P style="text-center" text="5"/></td>
                                    <td><P text="Distributed Computing"/></td>
                                    <td><P style="text-center" text="3"/></td>
                                </tr><tr>
                                    <td><P text="Programming Exercises"/></td>
                                    <td><P style="text-center" text="5"/></td>
                                    <td><P text="Team Software Project"/></td>
                                    <td><P style="text-center" text="3"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
                    <P text="Additionally, in each year, there are 1 - 3 courses in the M.Sc. in High Integrity Systems program at FRA-UAS with transferable credits which you may take. The list of the courses is to be announced a few months before the exchange begins." /><br />
                    <P text="The following courses are the courses in the SE program in Year 3 Semester 2 which have no equivalent counterpart at FRA-UAS. You are to take these courses in Year 4 Semester 2 instead:" />
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>Science & Technology for the Modern World</li>
                        <li>Software Verification and Validation (unless the M.Sc. course "Advanced Testing Techniques" is taken at FRA-UAS)</li>
                        <li>Software Development Process</li>
                        <li>Compiler Construction (for students in the SE track only)</li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <H4 style="text-primary font-bold" text="Cost" />
                    <P text="In accordance with the university's regulation, you are required to pay the normal tuition fee for Year 3 Semester 1 to KMITL as usual. FRA-UAS does not collect additional tuition fee for your study there. You are still required to prepare for other expenses during your period of study at Frankfurt. The following table provides a rough estimate of the essential expenses (not including leisure activities, souvenirs and other unnecessary items):" />
                    <br/>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-auto m-auto px-10">
                            <thead>
                                <tr>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Expense" /></th>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Cost*" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><P text="Round-trip flight ticket"/></td>
                                    <td><P style="text-center" text="47,000 THB"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Semester ticket (covering public transport)"/></td>
                                    <td><P style="text-center" text="330 €"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Health insurance (80 € / month)"/></td>
                                    <td><P style="text-center" text="400 €"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Accommodation (280 – 380 € / month)"/></td>
                                    <td><P style="text-center" text="1,900 €"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Food (200 - 400 € / month)"/></td>
                                    <td><P style="text-center" text="2,000 €"/></td>
                                </tr><tr>
                                    <td><P text="Communication - Internet, cell phone (40 € / month)"/></td>
                                    <td><P style="text-center" text="200 €"/></td>
                                </tr>
                                <tr>
                                    <td><P style="font-bold" text="Total per semester (5 months)"/></td>
                                    <td><P style="text-center font-bold" text="≈ 250,000 Baht"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
                    <P style="text-center" text="*Cost : Estimated cost / semester (5 months)*"/>
                    <br/>
                </div>
            </section>
            <section>
                <div>
                    <H4 style="text-primary font-bold" text="Requirement" />
                    <P text="The following is the minimum requirement for joining the exchange program at FRA-UAS." />
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>Studying in Year 3 Semester 1 of the SE program.</li>
                        <li>GPA at the end of Year 2 is 2.7 or higher.</li>
                        <li>Excellent English language skills</li>
                    </ul><br />
                    <P text="Those who do not satisfy these requirements may be accepted at the discretion of the International College and FRA-UAS." />
                </div>
            </section>
            <section>
                <div>
                    <H4 style="text-primary font-bold" text="Application" />
                    <P text="The application procedure is as follows:" />
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>The candidate fills in the International College study abroad application form: <a href="https://goo.gl/HPqTbB">https://goo.gl/HPqTbB</a></li>
                        <li>IC evaluates and selects the candidates and announces the result of the selection.</li>
                        <li>IC nominates the selected candidates to FRA-UAS.</li>
                        <li>The selected candidates complete the application on FRA-UAS website: <a href="https://www.frankfurt-university.de/en/studies/international-office/incomings/exchange/">https://www.frankfurt-university.de/en/studies/international-office/incomings/exchange/</a></li>
                        <li>FRA-UAS emails each candidate an acceptance letter and an application form for accommodations.</li>
                        <li>Accepted candidates start applying for a student visa.</li>
                    </ul><br/>
                    <div className="overflow-x-auto">
                        <table className="table w-auto m-auto px-10">
                            <thead>
                                <tr>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Activity" /></th>
                                    <th className="bg-[#DF6F3A]"><P style="text-base-100 text-center" text="Date" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><P style="font-bold" text="Submit an intent to apply"/></td>
                                    <td><P style="text-center font-bold" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P style="font-bold" text="Application deadline on FRA-UAS webseite (strict)"/></td>
                                    <td><P style="text-center font-bold" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Arrival at Frankfurt"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Orientation activities"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="German language course"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Teaching begins"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Teaching ends"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr><tr>
                                    <td><P text="End of exam period"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                                <tr>
                                    <td><P text="Start of Academic Year 2019 at KMITL"/></td>
                                    <td><P style="text-center" text="TBA"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <br/>
                    <H4 style="text-primary font-bold" text="Contact" />
                    <P text="For all enquiries regarding the exchange study at FRA-UAS, contact : Dr. Natthapong Jungteerapanich"/>
                    {/* <P text="Useful links:"/>
                    <ul className="list-disc ml-5 text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>International Office at FRA-UAS</li>
                        <li>Computer Science Program at FRA-UAS</li>
                        <li>English taught courses at FRA-UAS</li>
                    </ul> */}
                </div>
            </section>
            <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">
                    <a href="/program/exchange-study-abroad">Back</a>
                </button>
            </div>
        </div>
    )
}

export default ApplicationGuidance


