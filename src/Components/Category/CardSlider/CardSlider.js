import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card  from "../Card/Card";
import './CardSlider.css'
import { Link } from "react-router-dom";

const CardSlider = () =>{
  const Categories=[
    {
      id:"1",
      image:"https://www.vz.ae/wp-content/uploads/2019/07/2019-07_blog-870x479.jpg",
      link:"/prodcut-list"
    },
    {
      id:"2",
      image:"https://thumbs.dreamstime.com/b/business-activity-complex-like-puzzle-pictured-as-word-business-activity-puzzle-to-show-can-be-difficult-164222766.jpg",
      link:"/"
    },
    {
      id:"3",
      image:"https://km.visamiddleeast.com/dam/VCOM/blogs/visa-blue-gradient-800x450.jpg",
      link:"/"
    },
    {
      id:"4",
      image:"https://www.rizmona.com/wp-content/uploads/2020/01/VAT-registration.jpg",
      link:"/"
    }
  ]
    const settings = {
      dots: true,
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
            dots:false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
    //var cards =[1,2,3,4,5,6,7]
    return (
      <div className="Category-cardSliderMain">
        {/* <div className="cardSliderContainer"></div> */}
        <Slider className="cardSliderContainer" {...settings}>      
           {Categories.map(item=>(
            <div>
              <Link to="/product-list" id={item.id}>
                 <Card {...item}/>
              </Link>
            </div> 
           ))}          
        </Slider>
      </div>
    );
  }


export default  CardSlider