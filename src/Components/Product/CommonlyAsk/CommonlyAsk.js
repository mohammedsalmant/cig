import React from 'react'
import MainCardSlider from '../../Slider/MainCardSlider'
import './CommonlyAsk.css'

const CommonlyAsk = () => {
  return (
    <div className='commonlyAsk'>
      <div >
        <h2>Commonly Ask For</h2>
      </div> 
      <div style={{maxWidth: "100%"}}>    
          <MainCardSlider/>
      </div>
    </div>
  )
}

export default CommonlyAsk