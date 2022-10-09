import {H3} from "./components/headers"

interface IHeader {
    text: string,
    style: string
  }

const About = () => {
      
    return (
        <div>
            <div className="container mx-auto">
                <H3 style="text-gradient font-bold text-center" text="ABOUT"/>
            </div>
        </div>
    )
}

export default About