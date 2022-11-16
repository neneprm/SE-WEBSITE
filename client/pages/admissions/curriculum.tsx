import {H3,H4,P} from "../components/headers"
import { useState } from "react"

const initialTodos = [
    { id: 0, title: 'TCAS Admissions', description: "tcas admission" },
    { id: 1, title: 'Direct Admission', description: "direct admission" },
    { id: 2, title: 'Application Procedure and Schedule', description: "application"},
  ];
const Curriculum = () => {
    const [toggleState, setToggleState] = useState(initialTodos[0].id);
    return(
        <div>
            <div className="container mx-auto my-8">
                <div className="tabs my-8">
                    
                    <a className={toggleState === 1 ? "tab tab-bordered tab-active text-accent text-base sm:text-2xl" : "tab tab-bordered text-accent text-base sm:text-2xl"} onClick={() => setToggleState(1)}>
                            TCAS Admission
                            
                    </a>
                    <a className={toggleState === 2 ? "tab tab-bordered tab-active text-accent text-base sm:text-2xl" : "tab tab-bordered text-accent text-base sm:text-2xl"} onClick={() => setToggleState(2)}>
                            Direct Admission
                            
                    </a>
                    <a className={toggleState === 3 ? "tab tab-bordered tab-active text-accent text-base sm:text-2xl" : "tab tab-bordered text-accent text-base sm:text-2xl"} onClick={() => setToggleState(3)}>
                            Application Procedure and Schedule
                    </a>
                </div>

                <div>
                    
                </div>
                
                
                
                
            </div>
        </div>
    )
}

export default Curriculum