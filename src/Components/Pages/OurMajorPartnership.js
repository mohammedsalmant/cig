import React from 'react';
import './OurMajorPartnership.css'


const OurMajorPartnership = () => {
const Partners=[
    {
        id:"1",
        image:"http://www.oxbowcs.ae/assets/images/6-1242x544.jpg",
        link:"/prodcut-list"
},
{
    id:"2",
    image:"https://media-exp1.licdn.com/dms/image/C510BAQES7sbWodWOcg/company-logo_200_200/0/1549882971798?e=2159024400&v=beta&t=64PoKE2Lu-iFTUZm9Gs-UMbT1ehibij5utnt0g-CRhg",
    link:"/prodcut-list"
},
{
    id:"3",
    image:"https://pbs.twimg.com/profile_images/1314133376627077120/zfSLjdf7_400x400.jpg",
    link:"/prodcut-list"
},
{
    id:"4",
    image:"https://th.bing.com/th/id/OIP.bRkPXSTNDqb6oXBX5OGCPQHaD4?pid=ImgDet&rs=1",
    link:"/prodcut-list"
},
{
    id:"5",
    image:"https://emiratesfreezones.com/images/about/abc8.jpg",
    link:"/prodcut-list"
},
]

  return (
      <div className="OurMajorPartnership-main">
          <h2>Our Major Partnership</h2>
          <div className="OurMajorPartnership">
          {Partners.map(item=>(
            <div className='OurMajorPartnership-cardMain'>    
                <img src={item.image} class="img-fluid rounded" alt='Partners'/>                
            </div>
          ))}     
      </div>
      </div>
     
  )
}

export default OurMajorPartnership