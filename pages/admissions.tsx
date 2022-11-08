import {H3} from "./components/headers"
import Button from "./components/button"
const Admissions = () => {
    return (
        <div>
            <div className="container mx-auto py-8">
                <H3 style="text-gradient font-bold text-center py-8" text="ADMISSIONS"/>
                <div className="h-56 grid grid-cols-2 gap-40 content-center ...">
                    <Button style="btn-outline border-2 btn-accent" link="/admissions/curriculum" text="CURRICULUM"></Button>
                    <Button style="btn-outline border-2 btn-accent" link="/admissions/announcement" text="ANNOUNCEMENT"></Button>
                </div>
                

            </div>
        </div>
    )
}

export default Admissions