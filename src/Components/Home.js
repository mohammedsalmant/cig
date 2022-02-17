import React from 'react'
import Categories from './Category/Categories';
import BestSelling from './Product/BestSelling';
import Slider from './Banner/slider'
import CommonlyAsk from './Product/CommonlyAsk/CommonlyAsk';
import OurMajorPartnership from './Pages/OurMajorPartnership';
import BestPackage from './Pages/BestPackage';
import BestSellingTrade from './Pages/BestSellingTrade';
import Recommended from './Pages/Recommended';
import ExploreAll from './Pages/ExploreAll';

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <BestSelling />
      <CommonlyAsk/>
      <OurMajorPartnership/>
      <BestPackage/>
      <BestSellingTrade/>
      <Recommended/>
      <ExploreAll/>
    </div>
  )
}

export default Home