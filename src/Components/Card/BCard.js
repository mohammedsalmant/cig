import React from 'react';
import "./BCard.css"

// src="https://media.istockphoto.com/photos/young-man-shopping-online-picture-id1305615921?s=612x612"
const Card = (item) => {
    return (
    <div>      
        <div className='cardMain'>
            <div class="container mb-5 d-flex justify-content-center align-items-center">
                <div class="card">
                    <div class="inner-card"> <img src={item.image} class="img-fluid rounded" alt='ProductImage'/>
                        <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                            <h4>{item.name}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
                        </div>
                        <div class="mt-2 px-2"> <small>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</small> </div>
                        <div class="px-2">
                            <h3>AED {item.sprice}</h3>
                        </div>
                        <div class="px-2 mt-3"> <button class="btn btn-primary px-3">Buy Now</button> <button class="btn btn-outline-primary px-3">Add to cart</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card