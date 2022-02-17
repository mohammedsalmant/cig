import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div className="bannerSliderMain">
        <Slider className="bannerSlider" {...settings}>
          <div className="bannerSliderContent">
            <img src="/images/bn.jpg" alt="" />
          </div>
          <div className="bannerSliderContent">
          <img src="/images/t.jpeg" alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}