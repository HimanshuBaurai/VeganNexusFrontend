import React from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar.jsx'
import bgVideo from '../../assets/bgVideo.mp4'
import Page1 from '../../pages/Page1.jsx'
import Page2 from '../../pages/Page2.jsx'
import AboutUs from '../AboutUs/AboutUs'
import Info from '../Info/Info'
import GreenStrip from '../GreenStrip/GreenStrip.jsx'
 
import MustTry from '../MustTry/MustTry.jsx'
import Inspire from '../Inspire/Inspire.jsx'
import Footer from '../Footer/Footer.jsx'


const Hero = () => {  
    return (
        <>
            <Navbar />
            <video autoPlay loop muted src={bgVideo} />
            {/* Add overlay div */}
            <div id='main'> 
                <Page1 />
                <Page2 />
                <AboutUs/>
                <Info/>
                <GreenStrip/>
                <MustTry/>
                <Inspire/>
                <Footer/>
            </div>

        </>
    )
}

export default Hero