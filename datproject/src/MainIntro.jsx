import "./Introgrid.css"
import { Reveal } from "./Reveal";
import { RevealSmooth } from "./RevealSmooth";

import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

function MainIntro () {
    return(
        <div className="introgrid">
            <RevealSmooth>
            <div className="introimage">
                <img src="/DGPROJECTS.png"/> 
            </div>
            </RevealSmooth>
            
            <div className="introcontent">
            
                <h2>
                <RevealSmooth>
                Agencja Marketingu Internetowego
                </RevealSmooth>
                </h2>
            
            
                <p><RevealSmooth><span className="bolderspan">Zapewniamy wszystko, co niezbędne do odniesienia sukcesu online.</span> Od tworzenia stron internetowych po pozyskiwanie klientów - zapewniamy pełne wsparcie.</RevealSmooth></p>
                <RevealSmooth><button>Skontaktuj sie z nami</button></RevealSmooth>
                
            </div>
            
        </div>
    )
}

export default MainIntro;