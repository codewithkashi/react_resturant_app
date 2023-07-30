import React from 'react';
import {data, images} from "../../constants"
import './Laurels.css';
import { SubHeading } from '../../components';
const Laurels = () => {
  const AwardList = ({imgUrl, title, subtitle})=>(
      <div className="app__laurels-medals_item flex__center">
          <img src={imgUrl} className='app__laurels-img'/>
          <div className="app__laurels_content">
            <p className='app__laurels_content-title'>{title}</p>
            <p className='p__opensans'>{subtitle}</p>
          </div>
      </div>
  )
  return (
    <div className='app__laurels section__padding' id='awards'>
        <div className="app__laurels-container">
          <SubHeading title="Awards & Recognition"/>
          <p className="headtext__cormorant">Our Laurels</p>
          <div className="app__laurels-medals">
              {
                data.awards.map((award)=>(
                  <AwardList {...award}/>
                ))
              }
          </div>
        </div>
        <div className="app__laurels-hero">
          <img src={images.laurels}/>
        </div>
    </div>
  )

}



export default Laurels;
