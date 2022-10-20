import { H3} from "../components/headers"
import Card from '../components/card'

const ExchangeStudyAbroad = () => {
    return (
        <div>
            <div className="container mx-auto">
                <H3 style="text-gradient font-bold text-center" text="EXCHANGE STUDY ABROAD" />
            </div>
            <section>
                <div>
                    <Card cardStyle="w-full" titleStyle="text-primary" title="Exchange Study at Frankfurt University of Applied Sciences" body="Qualified students in the SE program have an opportunity to join an exchange study for one semester in Year 3 Semester 2 at Frankfurt University of Applied Sciences (FRA-UAS), our partner university in Germany. The students joining the exchange program will be taking courses in the Bachelor Program in Computer Science at FRA-UAS and the results and credits of the study be transferred back to their study in the SE program. This article provides an overview of the exchange program for the current SE students who wish to undertake an exchange study at FRA-UAS." link="Read more →" />
                </div>
            </section>
        </div>
    )
}

export default ExchangeStudyAbroad