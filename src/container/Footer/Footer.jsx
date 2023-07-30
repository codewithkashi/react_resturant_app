import React from 'react';
import {FooterOverlay, Newsletter} from "../../components"
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <p className="p__opensans">Copyrigh &copy; All rights reserved greitch.com</p>
  </div>

);

export default Footer;
