import React from 'react'
import MainCardSlider from '../Slider/MainCardSlider'

const ExploreAll = () => {
  return (
    <div className='commonlyAsk' style={{display: "flex",backgroundColor:"#fff",flexDirection: "column",alignItems: "center",paddingTop: "2rem"}}>
      <div >
        <h2>Explore All in Trading</h2>
      </div> 
      <div style={{maxWidth: "100%"}}>    
          <MainCardSlider/>
      </div>
    </div>
  )
}

export default ExploreAll