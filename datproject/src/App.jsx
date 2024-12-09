import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MainIntro from './MainIntro'
import Klienci from './Klienci'
import WhatWeCan from './WhatWeCan'
import { RevealSmooth } from './RevealSmooth'
import SwipeCards from './SwipeCards'
import HorizontalScrollCarousel from './HorizontalScrollCarousel'
import Examples from './Examples'
import './App.css'

function App() {
  const [buttonOpen, setButtonOpen] = useState(false)

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const video = document.getElementById("myVideo");
    video.oncanplaythrough = function() {
      video.muted = true;
      video.play();
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const handleMenuOpen = () =>{
    console.log("Menu button clicked");
    setButtonOpen(!buttonOpen);
    console.log("buttonOpen state:", !buttonOpen);
  }

  return (
       
    <div className='backgroundmain'>
          <Navbar handleMenuOpen={handleMenuOpen} handleClick={handleClick} isClicked={isClicked}/>
          <MainIntro/>
          <Klienci/>
          <WhatWeCan/>
          {buttonOpen && (
                <div className='popupmenu'>
                  <div className='popupmain'>
                  <RevealSmooth>
                    <ul>
                        <li>Główna</li>
                        <li>O Nas</li>
                        <li>Nasze Prace</li>
                        <li>Nasze Uslugi</li>
                        <li>Kontakt</li>
                    </ul>
                  </RevealSmooth>
                  </div>
                </div>
                )}
          <div>
          </div>
          <div>
            <video id="myVideo" width="100%" height="auto" autoplay muted loop>
            <source src="/Animated.mp4" type="video/mp4"/>
            </video>
          </div>
          <Examples/>
          <div className="swipecards">
          </div>
            
      </div>
  )
}

export default App
