// import React, { useEffect, useRef } from 'react'
import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)


const Navbar = () => {
    // const navRef = useRef(null);

    // useEffect(() => {
    //     gsap.to('#nav', {
    //         backgroundColor: "#000",
    //         duration: 0.5,
    //         height: "80px",
    //         scrollTrigger: {
    //           trigger: "#nav",
    //           scroller: "body", 
    //           start: "top -10%",
    //           end: "top -11%",
    //           scrub: 1,
    //         },
    //     })
    // }, [])

    return (
        <div id='nav' >
            <img src={logo} alt='website logo' />
            <a href='#'><h4>Recipes</h4></a>
            <a href='#'><h4>Cooking Tips</h4></a>
            <a href='#'><h4>Meal Plans</h4></a>
            <a href='#'><h4>Health Benefits</h4></a>
            <a href='#'><h4>Blog/Articles</h4></a>
        </div>
    )
}

export default Navbar