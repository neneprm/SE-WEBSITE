import {H3,H4,P} from "../components/headers"

const Curriculum = () => {
    return(
        <div>
            <div className="container mx-auto pb-8">
                <div className="tabs">
                    <a className="tab tab-bordered">TCAS Admissions</a> 
                    <a className="tab tab-bordered tab-active">Direct Admission</a> 
                    <a className="tab tab-bordered">Application Procedure and Schedule</a>
                </div>
                <H3 style="text-accent" text="TCAS Admission"/>
            </div>
        </div>
    )
}

export default Curriculum