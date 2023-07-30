import React from 'react';
import { SubHeading } from '../../components';
import './Chef.css';
import {images} from "../../constants"
const Chef = () => (
  <div className='app__chef app__wrapper section__padding' id="home">

    <div className='app__wrapper_img'>
      <img src={images.chef} alt="" />
    </div>


    <div className='app__wrapper_info'>
      <SubHeading title="Chef Ken"/>
      <h1 className="app__chef-h1">What we Believe in</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae debitis rem harum tenetur. Accusamus perferendis dolor sit iure quo?</p>
      <p className="app__chef-aboutchef">Kevin Powell</p>
      <p className="p__opensans">Speical Cook</p>
      <img src={images.sign} alt="" className='app__chef-sign' />
    </div>
    
  </div>
);

export default Chef;