import React, { useEffect } from 'react'
import veg1 from '../../assets/veg1.jpeg'
import veg2 from '../../assets/veg2.jpeg'
import './AboutUs.scss'


// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)


const AboutUs = () => { 

    // useEffect(() => {
    //     gsap.from('#about-us img, #about-us-in', {
    //         y:50,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.5,
    //         scrollTrigger: {
    //             trigger: '#about-us',
    //             scroller: "body",
    //             // markers: true,
    //             start: "top 60%",
    //             end: "top 58%",
    //             scrub: 3,
    //         },
    //     })
    // }, [])

    return (
        <div id='about-us'>
            <img src={veg2} alt='vegImg' />
            <div id='about-us-in'>
                <h3>ABOUT US</h3>
                <p >Our vision extends beyond just nutritious eating. We believe in a holistic approach that not only promotes personal health but also nurtures the environment and supports animal welfare. Every choice matters.</p>
            </div>
            <img src={veg1} alt='vegImg' />
        </div>
    )
}

export default AboutUs