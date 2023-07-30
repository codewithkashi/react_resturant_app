import React from 'react';
import { SubHeading } from '../../components';
import {images} from "../../constants"
import './Gallery.css';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
const imagesGallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction)=>{
      const {current} = scrollRef
      if(direction==="left"){
        current.scrollLeft -= 300
      }
      else{
        current.scrollLeft += 300
      }
  }


  return(
  <div className='app__gallery app__wrapper section__padding' id="home">
  <div className='app__gallery-content'>
    <SubHeading title="Instagram"/>
    <h1 className="headtext__cormorant">Photo Gallery</h1>
    <p className="p__opensans" style={{margin: "2rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae debitis rem harum tenetur. Accusamus perferendis dolor sit iure quo?</p>
    <button className="custom__button">View More</button>
  </div>
  <div className="app__gallery-images">
    <div className="app__gallery-images_container" ref={scrollRef}>
      {
        imagesGallery.map((image, index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery_image${index+1}`}>
            <img src={image} alt="" />
            <BsInstagram className='app__gallery-icon'/>
          </div>
        ))
      }
    </div>
    <div className="app__gallery-images_arrows">
      <BsArrowLeftShort className='app__gallery-arrow_icon' onClick={()=>(scroll("left"))}/>
      <BsArrowRightShort className='app__gallery-arrow_icon' onClick={()=>(scroll("right"))}/>
    </div>
  </div>
</div>
)};

export default Gallery;
