import React from 'react';
import {images} from "../../constants"
import './Newsletter.css';
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi"
const Newsletter = () => (
  <div className='app__newsletter '>
    <span>
      <p className="app__findus_heading_opening">Contact Us</p>
      <p className="p__opensans">24/7 Call Center. Call Anytime</p>
      <p className="p__opensans">+9434234242</p>
      <p className="p__opensans">+9434234254</p>
    </span>
    <span>
      <img src={images.gericht} alt="" className='app__newsletter_img' />
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, perspiciatis numquam?</p>
      <div className="app__newsletter-social_logos">
        <div><img src={images.spoon} alt="" className='spoon'/></div>
        <FiFacebook className='app__social-icon'/>
        <FiInstagram className='app__social-icon'/>
        <FiTwitter className='app__social-icon'/>
      </div>
    </span>
    <span>
      <p className="app__findus_heading_opening">Working Hours</p>
      <p className="p__opensans">Monday-Friday </p>
      <p className="p__opensans">07:00AM TO 07:00PM</p>
      <div style={{margin: "1rem 0"}}></div>
      <p className="p__opensans">Saturday-Sunday </p>
      <p className="p__opensans">09:00AM TO 07:00PM</p>
    </span>
  </div>
);

export default Newsletter;
