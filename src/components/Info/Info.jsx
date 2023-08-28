// import React, { useEffect } from 'react'
import React from 'react'
import './Info.scss'
import img1 from '../../assets/mBenefits.jpeg'
import img2 from '../../assets/recepies.jpeg'
import img3 from '../../assets/cooking-tips.jpeg'
import img4 from '../../assets/meal-plans.jpeg'


// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)

const Info = () => {

    // useEffect(() => {
    //     gsap.from('.card', { 
    //         opacity: 0,
    //         duration: 0.6, 
    //         stagger:0.6,
    //         scrollTrigger: {
    //             trigger: '.card',
    //             scroller: "body",
    //             // markers: true,
    //             start: "top 70%",
    //             end: "top 75%",
    //             scrub: 2,
    //         },
    //     })
    // }, [])

    const Option1 = {
        title: 'BENEFITS',
        imgPath: img1,
        paraGraph: 'Vegan meals emphasize a diverse array of fruits, vegetables, grains, nuts, and seeds, providing your body with a rich spectrum of essential nutrients.',
    }

    const Option2 = {
        title: 'RECEPIES',
        imgPath: img2,
        paraGraph: 'Remember, the beauty of vegan cooking lies in its versatility. Dont hesitate to experiment with ingredients, flavors, and textures to create your own unique recipes. ',
    }

    const Option3 = {
        title: 'COOKING TIPS',
        imgPath: img3,
        paraGraph: ' Prioritize fresh fruits, vegetables, grains, legumes, and nuts to build the foundation of your vegan meals. Fresh ingredients contribute to vibrant flavors',
    }

    const Option4 = {
        title: 'MEAL PLANS',
        imgPath: img4,
        paraGraph: 'Our thoughtfully designed meal plans simplify the process of nourishing your body with a well-balanced array of plant-based nutrients.',
    }
    return (
        <div id="cards-container">
            <div>
                <div className="card" id="card1">
                    <div className="overlay" >
                        <h4>{Option1.title}</h4>
                        <p>
                            {Option1.paraGraph}
                        </p>
                    </div>
                </div>
                <div className="card" id="card2">
                    <div className="overlay">
                        <h4>{Option2.title}</h4>
                        <p>
                            {Option2.paraGraph}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card" id="card3">
                    <div className="overlay">
                        <h4>{Option3.title}</h4>
                        <p>
                            {Option3.paraGraph}
                        </p>
                    </div>
                </div>
                <div className="card" id="card4">
                    <div className="overlay">
                        <h4>{Option4.title}</h4>
                        <p>
                            {Option4.paraGraph}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="card" id="card1">
                <div className="overlay" >
                    <h4>{Option1.title}</h4>
                    <p>
                        {Option1.paraGraph}
                    </p>
                </div>
            </div>
            <div className="card" id="card2">
                <div className="overlay">
                    <h4>{Option2.title}</h4>
                    <p>
                        {Option2.paraGraph}
                    </p>
                </div>
            </div>
            <div className="card" id="card3">
                <div className="overlay">
                    <h4>{Option3.title}</h4>
                    <p>
                        {Option3.paraGraph}
                    </p>
                </div>
            </div>
            <div className="card" id="card4">
                <div className="overlay">
                    <h4>{Option4.title}</h4>
                    <p>
                        {Option4.paraGraph}
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Info