import React, { useState } from 'react';
import {BsPauseFill, BsFillPlayFill} from "react-icons/bs"
import './Intro.css';
import {meal} from "../../constants"
import { MdViewStream } from 'react-icons/md';
const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const vidRef = React.useRef()
  const handleVideo = ()=>{
    setplayVideo((prevPlayVideo)=>!(prevPlayVideo))
    if(playVideo){
      vidRef.current.pause()
    }
    else{
      vidRef.current.play()
    }
}
  return(
    <div className='app__video'>
    <video src={meal} loop type="video/mp4" controls={false} muted ref={vidRef}/>

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
        {
          playVideo? (<BsPauseFill color='#fff' fontSize={30}/>): <BsFillPlayFill color='#fff' fontSize={30}/>
        }
      </div>
    </div>
  </div>
  )
}

export default Intro;
