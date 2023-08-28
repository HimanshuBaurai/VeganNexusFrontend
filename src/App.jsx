import React, { useEffect, useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Cursor from './components/Cursor/Cursor.jsx';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {  
  useEffect(() => {
    gsap.to('.navbar', {
      backgroundColor: "#000",
      duration: 0.5,
      height: "80px",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    })

    gsap.from('#about-us img, #about-us-in', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#about-us',
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
      },
    })

    gsap.to('#main', {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: '#main',
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
      },
    })

    // gsap.from('.card', {
    //   opacity: 0,
    //   duration: 0.6,
    //   stagger: 0.6,
    //   scrollTrigger: {
    //     trigger: '.card',
    //     scroller: "body",
    //     // markers: true,
    //     start: "top 70%",
    //     end: "top 75%",
    //     scrub: 2,
    //   },
    // })

    gsap.from("#colon1", {
      y: -50,
      x: -50,
      scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
      },
    });
    gsap.from("#colon2", {
      y: 70,
      x: 70,
      scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
      },
    });

  }, [])

  return (
    <div id='app'>
      <Hero />
      <Cursor />

    </div>
  )
}

export default App