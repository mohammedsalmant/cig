import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card  from "../Card/BCard";
import './MainCardSlider.css';
import Products from '../Product/Products'
import { Link } from "react-router-dom";
// import {useNavigate } from "react-router-dom";

const MainCardSlider=()=>{
  // let navigate = useNavigate(); 
  // const clickHandler=()=>{
  //   let path = `/product-page`; 
  //   navigate(path);
  // }
  
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
      ]
    };
    return (
      <div className="MaincardSliderMain">
        {/* <div className="cardSliderContainer"></div> */}
        <Slider className="cardSliderContainer" {...settings}>      
          {Products.map(item=>(
            <div>
              <Link to={`/product-page/${item.id}`}>
                <Card {...item}/>   
              </Link>                         
            </div> 
           ))}   
        </Slider>
      </div>
    );
  }

  export default MainCardSlider