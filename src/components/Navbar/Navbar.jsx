import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import './Navbar.css';
import images from "../../constants/images"
const Navbar = () => {

  const [toggle, setToggle] = React.useState(false)
  return(


    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="Logo" />
    </div>
    <ul className='app__navbar-links'>
      <li><a href="#home" className='p__opensans'>Home</a></li>
      <li><a href="#about" className='p__opensans'>About</a></li>
      <li><a href="#menu" className='p__opensans'>Menu</a></li>
      <li><a href="#awards" className='p__opensans'>Awards</a></li>
      <li><a href="#contact" className='p__opensans'>Contact</a></li>
    </ul>

    <div className='app__navbar-login'>
      <a href="" className='p__opensans app__links-login-largescreen'>Login/Register</a>
      <div></div>
      <a href="" className='p__opensans app__links-login-largescreen'>Boook Table</a>
    </div>

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggle(true) }} />

        {toggle &&(<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu color='#fff' fontSize={27} onClick={()=>{setToggle(false)}} className='overlay__close'/>
        <ul className='app__navbar-smallscreen-links'>
          <li><a href="#home" className='p__opensans'>Home</a></li>
          <li><a href="#about" className='p__opensans'>About</a></li>
          <li><a href="#menu" className='p__opensans'>Menu</a></li>
          <li><a href="#awards" className='p__opensans'>Awards</a></li>
          <li><a href="#contact" className='p__opensans'>Contact</a></li>
          <li className='app__links-login-smallscreen'><a href="" className='p__opensans'>Boook Table</a></li>
          <li className='app__links-login-smallscreen'><a href="" className='p__opensans'>Boook Table</a></li>
        </ul>
      </div>)}
    </div>
  </nav>
  )
}
  

export default Navbar;
