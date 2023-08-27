// import React, { useEffect } from 'react'
import React from 'react'
import './MustTry.scss'

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)

const MustTry = () => {
    // useEffect(() => {
    //     gsap.from("#colon1", {
    //         y: -70,
    //         x: -70,
    //         scrollTrigger: {
    //             trigger: "#colon1",
    //             scroller: "body",
    //             // markers:true,
    //             start: "top 55%",
    //             end: "top 45%",
    //             scrub: 4,
    //         },
    //     });
    //     gsap.from("#colon2", {
    //         y: 70,
    //         x: 70,
    //         scrollTrigger: {
    //             trigger: "#colon1",
    //             scroller: "body",
    //             // markers:true,
    //             start: "top 55%",
    //             end: "top 45%",
    //             scrub: 4,
    //         },
    //     });
    // }, [])

    return (
        <div id='MustTry'>
            <p>Here, delectable meets sustainable, and compassion meets taste. Brace yourself for a symphony of flavors, a celebration of life, and a voyage towards a greener, brighter future.</p>
            <img
                id="colon1"
                src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
                alt="quote-symbol"
            />
            <img
                id="colon2"
                src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
                alt="quote-symbol"
            />
        </div>
    )
}

export default MustTry