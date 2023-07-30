import React from 'react';
import "./Findus.css"
import { SubHeading } from '../../components';
import {images} from "../../constants"
const FindUs = () => (
  <div className='app__findus app__wrapper section__padding' id="contact">
  <div className='app__wrapper_info'>
    <SubHeading title="contact"/>
    <h1 className="headtext__cormorant">Find Us</h1>
    <p className="p__opensans" style={{margin: "2rem 0"}}>Lorem ipsum dolor sit amet perferendis dolor sit iure quo?</p>
    <p className='app__findus_heading_opening'>Opening Hours</p>
    <p className='p__cormorant app__findus_openinghours'>8:00AM To 7:00 PM</p>
    <p className='p__cormorant app__findus_openinghours'>8:00PM To 4:00 AM</p>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.findus} alt="" />
  </div>
</div>
);

export default FindUs;
