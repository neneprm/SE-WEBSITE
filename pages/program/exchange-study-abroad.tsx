import { H3, H4, P} from "../components/headers"

const ExchangeStudyAbroad = () => {
    return (
        <div>
            <div className="container mx-auto">
                <H3 style="text-gradient font-bold text-center" text="EXCHANGE STUDY ABROAD" />
            </div>
            <section>
                <div className="card bg-base-100 card-bordered shadow-lg">
                    <div className="card-body">
                        <H4 style="text-primary font-bold" text="Exchange Study at Frankfurt University of Applied Sciences"/>
                        <P text="Qualified students in the SE program have an opportunity to join an exchange study for one semester in Year 3 Semester 2 at Frankfurt University of Applied Sciences (FRA-UAS), our partner university in Germany. The students joining the exchange program will be taking courses in the Bachelor Program in Computer Science at FRA-UAS and the results and credits of the study be transferred back to their study in the SE program."/>
                        <br />
                        <P text="This article provides an overview of the exchange program for the current SE students who wish to undertake an exchange study at FRA-UAS."/>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent text-base-100">
                                <a href="/program/exchange_study/frankfurt">Read more →</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExchangeStudyAbroad
