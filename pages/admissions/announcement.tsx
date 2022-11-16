import {H3,H4,P} from "../components/headers"
import Card from "../components/card"

import { FaScroll, FaGraduationCap, FaCalendar, FaPlane, FaSuitcase } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const Announcement = () => {
    return(
        <div>
            <div className="container mx-auto my-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gab-4 content-start ...">
                    <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Image" /></figure>} title="Software Engineering TCAS Round 1" body="22 March 2022" icon={<FaScroll className="text-primary" />} link="" />
                    <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Image" /></figure>} title="Direct Admission Software Engineering" body="22 April 2022" icon={<FaScroll className="text-primary" />} link="" />
                    <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Image" /></figure>} title="Direct Admission Software Engineering" body="22 April 2022" icon={<FaScroll className="text-primary" />} link="" />
                    <Card image={<figure><img src="https://placeimg.com/400/225/arch" alt="Image" /></figure>} title="Direct Admission Software Engineering" body="22 April 2022" icon={<FaScroll className="text-primary" />} link="" />
                </div>
                
            </div>
        </div>
    )
}

export default Announcement