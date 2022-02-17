import React from 'react'
import MainCardSlider from '../Slider/MainCardSlider'

const Recommended = () => {
  return (
    <div className='commonlyAsk' style={{display: "flex",flexDirection: "column",alignItems: "center",paddingTop: "2rem"}}>
      <div >
        <h2>Recommended For You</h2>
      </div> 
      <div style={{maxWidth: "100%"}}>    
          <MainCardSlider/>
      </div>
    </div>
  )
}

export default Recommended