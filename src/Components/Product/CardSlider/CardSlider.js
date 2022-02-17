import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card  from "../Card/Card";
import './CardSlider.css'

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    var cards =[1,2,3,4,5,6,7]
    return (
      <div className="Product-cardSliderMain">
        {/* <div className="cardSliderContainer"></div> */}
        <Slider className="Product-cardSliderContainer" {...settings}>      
           {cards.map(item=>(
            <div>
                <Card/>
            </div> 
           ))}          
        </Slider>
      </div>
    );
  }
}