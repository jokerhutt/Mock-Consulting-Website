import { SiAffinity } from "react-icons/si";
import { SiVeeam } from "react-icons/si";
import { SiVeepee } from "react-icons/si";
import { SiAiqfome } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { SiNintendogamecube } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { SiAlienware } from "react-icons/si";
import { SiAirchina } from "react-icons/si";
import { SiMailchimp } from "react-icons/si";

import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { Reveal } from "./Reveal";



import "./Klienci.css"

function Klienci () {
    return( 
        <div className="klienci">
            <p>Zaufali nam wspaniali klienci</p>
            <div className="klienciicons">
            <SiMailchimp className="klienticon"/>
            <SiGithub className="klienticon"/>
            <SiNintendogamecube className="klienticon"/>
            <SiApple className="klienticon"/>
            </div>
        </div>
        
    )
}

export default Klienci;