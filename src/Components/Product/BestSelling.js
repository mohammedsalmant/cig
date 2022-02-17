import React from 'react'
import './BestSelling.css'
import MainCardSlider from '../Slider/MainCardSlider'

const Categories = () => {
  return (
    <div className='bestsellingMain'>
        <div >
            <h2>Best Selling Products</h2>
        </div>   
        <div style={{maxWidth: "100%"}}>
          <MainCardSlider/>
        </div>
    </div>
  )
}

export default Categories