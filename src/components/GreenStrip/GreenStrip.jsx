import React from 'react'
import './GreenStrip.scss' 
import Gif from '../../assets/ZdPH.gif'

const GreenStrip = () => {
  return (
    <div id='GreenStrip'> 
        <h4 className='content-text'> Unleash the Power of Plants! Join Our Vegan Community Today! </h4>
        <img src={Gif}/> 
    </div>
  )
}

export default GreenStrip