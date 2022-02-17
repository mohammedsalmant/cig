import React from 'react'
import MainCardSlider from '../Slider/MainCardSlider'

const BestPackage = () => {
  return (
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",paddingTop: "2rem"}}>
      <div >
        <h2>Best Package For You</h2>
      </div> 
      <div style={{maxWidth: "100%"}}>    
          <MainCardSlider/>
      </div>
    </div>
  )
}

export default BestPackage