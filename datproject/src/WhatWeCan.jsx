import "./WWC.css"
import { SiMoneygram } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { IoMegaphone } from "react-icons/io5";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { Reveal } from "./Reveal";




function WhatWeCan () {
    return(
        <div className="wwcmain">
            
            <div className="wwccontent">
                <p><Reveal>
                Co możemy dla Ciebie zrobić?</Reveal><br></br>
                <span className="wwcspan"><Reveal>Wszystko, czego potrzebujesz,</Reveal> <br></br>
                <Reveal>aby zbudować i rozwinąć swoją firmę w internecie.</Reveal></span>
                </p>
            </div>
            
            <br/>
            
            <div className="wwcgrid">
                
                <div className="wwcitem wwcborder wwcbordermobile">
                <Reveal>
                    <IoMegaphone className="wwcicon"/>
                </Reveal>
                    <div>
                
                    <h4><Reveal>Marketing</Reveal></h4>
                
                    <p>
                    <Reveal>
                    Klienci łatwiej znajdą Cię na pierwszych stronach Google dzięki naszym skutecznym strategiom pozycjonowania za pomocą kampanii Google Ads i optymalizacji SEO.
                    </Reveal>
                    </p>
                    </div>

                </div>
                <div className="wwcitem wwcborder wwcbordermobile">
                <Reveal>
                    <MdWeb className="wwcicon"/>
                </Reveal>
                    <div>
                
                    <h4><Reveal>Web Development</Reveal></h4>
                
                    <p>
                    <Reveal>
                    To fundament Twojej obecności w internecie. Zbuduj taką, która robi wrażenie i przekonuje odwiedzających
                    </Reveal>
                    </p>
                    </div>

                </div>
                <div className="wwcitem wwcbordermobile">
                <Reveal>
                    <TbTargetArrow className="wwcicon"/>
                </Reveal>
                    <div>
                
                    <h4><Reveal>Lead Generation</Reveal></h4>
                
                    <p>
                    <Reveal>
                    Znajdziemy Ci klientów, którzy nigdy sami by Cię nie znaleźli, a w zamian pobierzemy prowizję za każdą udaną współpracę.
                    </Reveal>
                    </p>
                    </div>

                </div>
    
            </div>
            

        </div>
    )
}

export default WhatWeCan;