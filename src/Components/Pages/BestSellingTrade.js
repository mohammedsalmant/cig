import React from 'react'
import MainCardSlider from '../Slider/MainCardSlider'

const BestSellingTrade = () => {
  return (
    <div className='commonlyAsk' style={{display: "flex",backgroundColor:"#fff",flexDirection: "column",alignItems: "center",paddingTop: "2rem"}}>
      <div >
        <h2>Best Selling in Tranding</h2>
      </div> 
      <div style={{maxWidth: "100%"}}>    
          <MainCardSlider/>
      </div>
    </div>
  )
}

export default BestSellingTrade