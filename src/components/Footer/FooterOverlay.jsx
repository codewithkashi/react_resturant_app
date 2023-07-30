import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className='app__footerOvelay flex__center'>
    <SubHeading title="Subscribe"/>
    <p className="headtext__cormorant">Subscribe To Our Newsletter</p>
    <p className="p__cormorant">Searh anything you want</p>
    <div className="app__search">
      <input type="text" className='app__searchbar'/>
      <button className='custom__button'>Search</button>
    </div>
  </div>
);

export default FooterOverlay;
