import BasicRating from "./Rating/Rating";
import React, { useEffect, useState } from 'react';
import './ProductPage.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button  from "../../Button/Button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Testimonial from "../../Testimonial/Testimonial";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams,useLocation } from "react-router-dom";
import Products from '../Products';
import MainCardSlider from "../../Slider/MainCardSlider";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { pathname } = useLocation();
  const {id} =useParams();
  console.log(id);

  useEffect(()=>{
    window.scrollTo(0, 0);
    setSelectedProduct(Products.find(item=>item.id === id))
    console.log(selectedProduct);
  },[selectedProduct,pathname,id])
   
  console.log(selectedProduct);
  return (
    <div>
        <div className="product-page-main">
            <div className="product-page-1">
                <div className="product-page-1-top"> 
                    <img src={selectedProduct.image} alt="Office" />
                </div>
                <div className="product-page-1-bottom">
                  <div className="product-page-1-bottom-img">
                    <img src={selectedProduct.image} alt="Office" />
                  </div>
                  <div className="product-page-1-bottom-map">
                    <img src="/images/map.svg" alt="map" />
                    <div className="product-page-1-bottom-map-text">
                      MAP
                    </div>
                  </div>
                  <div className="product-page-1-bottom-video">
                    <img src={selectedProduct.image} alt="Office" />
                    <div className="product-page-1-bottom-video-icon">
                      <PlayCircleOutlineIcon/>                 
                    </div>
                  </div>
                </div>
            </div>  
            <div className="product-page-2">
              {/* <h2>Office </h2> */}
              <div className="product-page-2-container" >
              <h2>{selectedProduct.name}</h2>
              <p>Original Price : {selectedProduct.oprice}</p>
              <p>Sale Price : {selectedProduct.sprice}</p>
              <p>Saving Amount :{selectedProduct.samount}</p>
              <Button/>
              <div className="product-rating">
                Product Ratings
                <BasicRating/>
              </div>
              <h5>Review</h5>
              <h6>2 Customer Review </h6>
          <div className="product-review"> 
                <div className="product-review-1">
                  <div className="customer">
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Mohammed Salman" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <p>Mohammed Salman</p>
                    </div>
                  <BasicRating/>
                  6/2/2022
                  <p>Good Service</p>
                </div>
                <div className="product-review-2">
                  <div className="customer">
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Sham" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <p>Sham</p>
                    </div>
                  <BasicRating/>
                  6/2/2022
                  <p>Good Service</p>
                </div>
              </div>  
              {/* <h5>Review</h5>
              <h6>2 Customer Review </h6> */}
              {/* <h2>Executive Office Space</h2> */}
              </div>
            </div>

            <div className="product-page-3">
            <div className="product-page-3-container" >
              <div>
                <h5>Benifits</h5>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit</li>
                  <li> sed do eiusmod tempor</li>
                  <li>incididunt ut labore et </li>
                </ul>
              </div>
              <div>
                <h5>About free Zone</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis 
                   ex ea commodo consequat.  </p>  
              </div>  
              {/* <div>
                <h5>Easy Installment</h5>  
              </div>  */}
              <h5>Share</h5>  
              <div className="product-page-3-share">
                <button> <WhatsAppIcon/></button>
                <button> <AlternateEmailIcon/></button>  
                <button> <FacebookIcon/></button>  
                <button> <InstagramIcon/></button>  
                <button> <TwitterIcon/></button>  
                <button> <LinkedInIcon/></button>  

              </div> 
            </div>
            </div>
        </div>
        <div className="product-page-bottom">
          <div className="product-page-bottom-1">
            <div className="product-page-1-bottom-video">
              <img src="https://i.pinimg.com/originals/0f/f6/35/0ff6359ba9e94a0f10b901c33bd14e76.jpg" alt="Office" />
              <div className="product-page-related-video-icon">
                <PlayCircleOutlineIcon/>
              </div>
            </div>
            <img className="product-page-1-bottom-blog" src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png" alt="" />
           
          </div>
          <div className="product-page-bottom-2">
              <Testimonial/>
          </div>
        </div>
        <div className="Similar-products">
          <div className="similar-product-head">
            <h2>Similar Products</h2>
          </div>
          <div>
              <MainCardSlider/>
          </div>
        </div>
       
    </div>
  )
}

export default ProductPage