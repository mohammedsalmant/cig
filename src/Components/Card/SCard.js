import React from 'react';
import "./Card.css"

// src="https://media.istockphoto.com/photos/young-man-shopping-online-picture-id1305615921?s=612x612"
const Card = (item) => {
    console.log(item);
  return (
    <div className='cardMain'>
        <div class="container  mb-5 d-flex justify-content-center align-items-center">
          <div class="card">
              <div class="inner-card"> <img src={item.image} class="img-fluid rounded" alt='cat'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card