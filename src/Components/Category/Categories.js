import React from 'react'
import CardSlider from './CardSlider/CardSlider'
import "./Categories.css"

const Categories = () => {
  return (
    <div className='categories-main'>
        <div >
            <h2>Our Major Categories</h2>
        </div>   
        <div style={{maxWidth: "100%"}}>
            <CardSlider />
        </div>
    </div>
  )
}

export default Categories